import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk, faMapMarkerAlt, faStore } from '@fortawesome/free-solid-svg-icons'


export default function Map() {

    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [geolocationAvailable, setGeolocationAvailable] = useState()
    const [geolocationStatus, setGeolocationStatus] = useState('notready')
    //The commerce state stores the response from a succesfull, request to the pagaphone api
    const [pagaphoneCommerces, setPagaphoneCommerces] = useState([])
    const [extremeCommerces, setExtremeCommerces] = useState([])
    const [commerces, setCommerces] = useState([])
    const [commercesReady, setCommercesReady] = useState('notready')
    const [allCommercesReady, setAllCommercesReady] = useState('notready')
    const [errorState, setErrorState] = useState()

    const getCoordinates = (position) => {
 
        let latitudeS = position.coords.latitude
        let longitudeS = position.coords.longitude 

        setGeolocationStatus('ready')

        setLatitude(latitudeS)
        setLongitude(longitudeS)
        getToken(latitudeS, longitudeS)
    }

    const coordinates = () => {
        if (navigator.geolocation) { //check if geolocation is available
            navigator.geolocation.getCurrentPosition(getCoordinates)

            
        }else {
            setGeolocationStatus('notavailable')
        }
    }

    const getToken =  async(latitudeS, longitudeS) => {
        
        await fetch("https://mvno-api.pagaphone.com/token/generateToken", {
            body: "user=MjEwMDUzNVVTMTU0MTc3LVBQLUFQSQ%3D%3D&password=MDAyMTAwN1BQMTg3MTc3LUFQSTk5NTIyMTAwNTM1VVMxNTQxNzctUFAtQVBJ",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST"
          }).then(res => {
              res.json().then((obj) => {
                  let token = obj.token
                  getPagaphoneCommerces(token, latitudeS, longitudeS)
                  getExtremeCommerces(latitudeS, longitudeS)
                })
            }).catch(err => {
                console.log(err)
            })
            
        }
        
    const getPagaphoneCommerces = async(token, latitudeS, longitudeS) => {
        await axios({
            headers: { "authorization-ug": `Bearer-UG ${token}` },
            method: 'post',
            url: 'https://mvno-api.pagaphone.com/sales/getSalesAddress',
            data: {
                "latitude": latitudeS,
                "longitude": longitudeS,
                "distance": 3
            }
        }).then(response => {
            console.log('pagaPhoneResponse:', response.data.modelo)
            response.data.modelo != undefined ?(
                setPagaphoneCommerces(response.data.modelo)
            ):(
                setPagaphoneCommerces([])
            )
            const allCommerces = [...pagaphoneCommerces, ...extremeCommerces]
            setCommerces(allCommerces)
            setCommercesReady('ready?')
            }).catch(error => {
                console.log('PP Error:', error.response.data.mensaje)
                setPagaphoneCommerces([])
            })
    }

    const getExtremeCommerces = async(latitudeS, longitudeS) => {
        await axios.get(`https://tae.xtremecard.com.mx:447/XtremeServices/api/GeolocationResource/getcommerces?latitude=${latitudeS}&longitude=${longitudeS}&radius=2&keyAuth=TESTING_API_KEY`).then(response => {
            console.log('Extreme:', response.data.commerces)
            
            response.data.commerces ? setExtremeCommerces(response.data.commerces) : console.log(`EX Error ${response.data.errorCode}`, response.data.errorMessage) 
            response.data.errorCode ? setExtremeCommerces([]) : setErrorState('noerrorinextreme')
            const allCommerces = [...pagaphoneCommerces, ...extremeCommerces]
            setCommerces(allCommerces)
            setCommercesReady('ready?')
        }).catch(error => {
            console.log('EX Error', error)
            
        })
    }

    const handleGetCommerces = async () => {

        if (navigator.geolocation) navigator.geolocation.getCurrentPosition(function(pos) {
            coordinates()
            return setCommercesReady('ready?')
        }, function(error) {
            console.log(error, 'Ubicación no activada');
            alert('Active la geolocalizacion')
        });

    }

    const commercesCards = () => {
        return commerces.map(commerce => {
            const distanceRaw = typeof(commerce.distance) === 'string' ? parseFloat(commerce.distance) : commerce.distance //some stri
            const distance = distanceRaw.toFixed(2)
            const commerceName = commerce.salesCommerce ? commerce.salesCommerce.toUpperCase() : commerce.businessName.toUpperCase()
            const address = commerce.address
            const city = commerce.city ? commerce.city : ''
            const suburb = commerce.suburb ? commerce.suburb : ''
            const state = commerce.state ? commerce.state : ''
            const zipCode = commerce.zipCode ? commerce.zipCode : commerce.zCode
            const uniqueKey = commerces.indexOf(commerce)
            
            return (
                <div key={uniqueKey} className='commerce-card'>

                    <div className='data-top d-flex-center'>
                        <div className='commercename-icon'>
                            <FontAwesomeIcon icon={faStore} /> 
                        </div>
                        <div className='commercename-name'>
                            {commerceName}
                        </div>
                    </div>



                    <div className='data-center d-flex-center'>
                        <div className='commercename-icon'>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </div>
                        <div className='commercename-k'>
                        {distance > 1 ? distance : (distance*100).toFixed(0)}{distance > 1 ? 'km' : 'm'}
                        </div>
                    </div>

                    <div className='data-bottom'>
                        <span>{address}</span>
                        <p className='suburb'>{suburb}</p>
                        <p className='city'>{city}, {state}</p>
                        <p className='zipcode'><FontAwesomeIcon icon={faMailBulk} /> {zipCode}</p>
                    </div>

                </div>
            )
        })
    }

    const handleNoCommerces = () => {
        if (errorState === 'nocommerces' ) {
            return(
                <div className='commerces-error'>
                    <p>
                        Lo sentimos, no hay zonas de recarga cerca de ti. 
                    </p>    
                </div>    
            )
        }     
    }

    const waitingOnUser = () => {
        return(
            <div className='commerces-instructions'>
                <p>
                    Para acceder a los servicios de localizacion, favor de aceptar el acceso desde tu dispositivo y da clic en el botón.
                </p>    
            </div>    
        )
    }

    useEffect(() => {
        if (navigator.geolocation) { //check if geolocation is available
            setGeolocationAvailable('yes')
            console.log('si');
        }
    }, [])

    useEffect(() => {
       console.log('getting coordinates')
        coordinates()
    }, [])

    // useEffect(() => {
    //     console.log('latitude type', typeof latitude)
    //     console.log('longitude type', typeof longitude)
    // }, [latitude])



    useEffect(() => {
       // console.log('Commerces Ready:', commercesReady)
        
        const combineCommerces = () => {
           // console.log(' pagaphone commerces', pagaphoneCommerces)
            //console.log(' extreme commerces', extremeCommerces)
            const allCommerces = [...pagaphoneCommerces, ...extremeCommerces]
            setCommerces(allCommerces)
        }

        commercesReady === 'ready?' ? 
        combineCommerces() 
        : 
        console.log('array Not ready')

    }, [commercesReady])

    useEffect(() => {
        console.log('COMMERCES', commerces)
        commerces.length >= 1 ? setAllCommercesReady('ready') : setAllCommercesReady('notready')
        commerces.length < 1 ? setErrorState('nocommerces') : setErrorState('noerror')
    }, [commerces])

    return (
        <div className='commerces'>
            <div className='btn-commerces'>
                <button onClick={() => handleGetCommerces()}>Puntos de recarga cerca de mi</button>
            </div>
            
              {commercesReady !== 'ready?' ? waitingOnUser() : handleNoCommerces()} 
            

            <div className='commerces-wrapper'>
                {allCommercesReady === 'ready' ? commercesCards() : <h3> </h3>}
            </div>

        </div>
    )
}