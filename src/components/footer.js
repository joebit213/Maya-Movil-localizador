import React from 'react'
import '../styles/footer.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faFacebookF, faInstagram, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='row w-80 d-flex center p-20'>
                <div className='w-40'>
                    <div className='footer-logo'>
                        <img className='logo' src='https://mayamovil.com.mx/web/image/1510-0bfb27b7/MAYA%20BLANCO.png'/> 
                        <p>Acerca de Nosotros</p>
                        <p>MAYA móvil, El nuevo concepto en telefonía.</p>
                        <p>Elige tu equipo y plan a tu medida.</p>
                    </div>
                </div>
                <div className='sitemap w-60 d-flex'>
                    <div className='w-25'>
                        <span>Tienda</span>
                        <ul>
                            <li>
                                <a href="https://mayamovil.com.mx/shop/category/smartphones-y-tablets-2">
                                    <FontAwesomeIcon icon={faChevronRight} />Smartphones
                                </a>
                            </li>
                            <li>
                                <a href="https://mayamovil.com.mx/shop/category/servicio-movil-1">
                                    <FontAwesomeIcon icon={faChevronRight} />Servicio Móvil
                                </a>
                            </li>
                            <li>
                                <a href="https://mayamovil.com.mx/shop/category/accesorios-3">
                                    <FontAwesomeIcon icon={faChevronRight} />Accesorios
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='w-25'>
                        <span>Información</span>
                        <ul>
                            <li>
                                <a href="https://mayamovil.com.mx/nosotros">
                                    <FontAwesomeIcon icon={faChevronRight} />Nosotros
                                </a>
                            </li>
                            <li>
                                <a href="https://mayamovil.com.mx/oferta">
                                    <FontAwesomeIcon icon={faChevronRight} />Oferta
                                </a>
                            </li>
                            <li>
                                <a href="https://mayamovil.com.mx/cobertura-1">
                                    <FontAwesomeIcon icon={faChevronRight} />Cobertura
                                </a>
                            </li>
                            <li>
                                <a href="https://mayamovil.com.mx/compatibilidad">
                                    <FontAwesomeIcon icon={faChevronRight} />Compatibilidad
                                </a>
                            </li>
                            <li>
                                <a href="https://mayamovil.com.mx/portabilidad">
                                    <FontAwesomeIcon icon={faChevronRight} />Portabilidad
                                </a>
                            </li>
                            <li>
                                <a href="https://mayamovil.com.mx/recarga">
                                    <FontAwesomeIcon icon={faChevronRight} />Recarga
                                </a>
                            </li>
                            <li>
                                <a href="https://mayamovil.com.mx/contrata">
                                    <FontAwesomeIcon icon={faChevronRight} />Contrata
                                </a>
                            </li>
                            <li>
                                <a href="https://mayamovil.com.mx/faqs">
                                    <FontAwesomeIcon icon={faChevronRight} />FAQs
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='w-25'>
                        <span>Soporte</span>
                        <ul>
                            <li><a href="https://mayamovil.com.mx/aviso-de-privacidad"><FontAwesomeIcon icon={faChevronRight} />Políticas de Privacidad</a></li>
                            <li><a href="https://mayamovil.com.mx/politicas-de-garantias"><FontAwesomeIcon icon={faChevronRight} />Políticas de Garantía</a></li>
                            <li><a href="https://mayamovil.com.mx/politica-de-devoluciones"><FontAwesomeIcon icon={faChevronRight} />Devoluciones</a></li>
                            <li><a href="https://mayamovil.com.mx/politica-de-pago"><FontAwesomeIcon icon={faChevronRight} />Políticas de Pago</a></li>
                            <li><a href="https://mayamovil.com.mx/aviso-legal"><FontAwesomeIcon icon={faChevronRight} />Aviso Legal</a></li>
                            <li><a href="https://mayamovil.com.mx/terminos-y-condiciones"><FontAwesomeIcon icon={faChevronRight} />Términos y Condiciones</a></li>
                            <li><a href="https://www.gob.mx/profeco"><FontAwesomeIcon icon={faChevronRight} />PROFECO</a></li>
                            <li><a href="https://www.condusef.gob.mx/"><FontAwesomeIcon icon={faChevronRight} />CONDUSEF</a></li>
                            <li><a href="https://tarifas.ift.org.mx/ift_visor/"><FontAwesomeIcon icon={faChevronRight} />TARIFAS</a></li>
                        </ul>
                    </div>
                    <div className='w-25'>
                        <span>Contacto</span>
                        <ul>
                            <li>Montes Urales #3, 
                                Lomas Verdes 4ta. secc. Naucalpan 
                                MéxicoC.P. 53125 </li>
                            <li><FontAwesomeIcon icon={faEnvelope} />ventas@mayamovil.com.mx</li>
                            <li><FontAwesomeIcon icon={faPhoneAlt} />52 55 6826 8860</li>
                        </ul>
                        <img className='logo logo-maya' src='https://mayamovil.com.mx/web/image/2238-3b486470/WEB_GRAFICOS2.png'/> 
                    </div> 
                </div> 
            </div>
            <div className='my-5'>
                <img className='payments' src='https://mayamovil.com.mx/web/image/2245-16914b1f/Conekta.png'/>
                <img className='payments' src='https://mayamovil.com.mx/web/image/2242-d87701a3/visa.png'/>
                <img className='payments' src='https://mayamovil.com.mx/web/image/2241-95716da0/mastercard.png'/>
                <img className='payments' src='https://mayamovil.com.mx/web/image/2164-d35bb1e6/MOCK_UP_SAMARA_2021-31.png'/>
            </div>
            <div className='row auto  center copywrite'>
                <div className='row w-80 d-flex-autogap center p-20'>
                    <div>
                        Copyright © MAYA móvil
                    </div>
                    <div className='gap-10'>
                        <a href="https://www.facebook.com/MAYA-M%C3%B3vil-103608365429703">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>    
                        <a href="#">    
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                    <div>
                    <img className='flag' src='https://mayamovil.com.mx/base/static/img/country_flags/mx.png?height=25'/>
                    </div>
                </div>

            </div>     


        </footer>
    )
}
