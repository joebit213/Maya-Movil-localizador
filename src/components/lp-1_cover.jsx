import React from 'react'
import '../styles/cover.scss';

export default function CoverLp1() {
    return (
        <div className='row'>
            <div className='cover-lp1 p-20'>
                <div className='w-50 title'>
                    <h1>MAYA <span>móvil</span> </h1>
                    <h3>El nuevo concepto en telefonía</h3>
                    <h3>Elige tu equipo y el plan a tu medida</h3>
                </div>

                <div className='cover-icons'>
                    <div className='row content-icons'>
                        <div className='icon w-20 b-right'>
                            <img src="https://res.cloudinary.com/dn3s8lyeh/image/upload/v1650458590/maya/WEBSITE_MOCK_UP_MAYA_REAL-09.png" alt="" />
                            <h5>PREPAGO Y PLANES</h5>
                        </div>
                        <div className='icon w-20 b-right'>
                            <img src="https://res.cloudinary.com/dn3s8lyeh/image/upload/v1650458590/maya/WEBSITE_MOCK_UP_MAYA_REAL-10.png" alt="" />
                            <h5>RED <br /> 5G Y 4G LTE</h5>
                        </div>
                        <div className='icon w-20 b-right'>
                            <img src="https://res.cloudinary.com/dn3s8lyeh/image/upload/v1650458590/maya/WEBSITE_MOCK_UP_MAYA_REAL-11.png" alt="" />
                            <h5>CONTACTANOS</h5>
                        </div>
                        <div className='icon w-20 b-right'>
                            <img src="https://res.cloudinary.com/dn3s8lyeh/image/upload/v1650458590/maya/WEBSITE_MOCK_UP_MAYA_REAL-12.png" alt="" />
                            <h5>LOS MEJORES ESQUIPOS</h5>
                        </div>
                        <div className='icon w-20'>
                            <img src="https://res.cloudinary.com/dn3s8lyeh/image/upload/v1650458590/maya/WEBSITE_MOCK_UP_MAYA_REAL-13.png" alt="" />
                            <h5>GARANTIA DE SATISFACCIÓN</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}