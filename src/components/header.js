import React from 'react'
import '../styles/header.scss';

export default function Header() {
    return (
        <div className='header-wrapper'>
            <div className='navbar-light d-flex justify-content-between w-100 h-50 p-20 shadow-none'>
                <div className='header-logo'>
                    <a href="https://mayamovil.com.mx/">
                        <img className='mx-5' src='https://mayamovil.com.mx/web/image/website/1/logo/Maya%20m%C3%B3vil?unique=21f3fcf' />
                    </a>
                </div>
                <div className='top-menu'>

                    <nav class="navbar navbar-expand-lg">
                        <div class="container-fluid">
        
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse nav-header" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item dropdown mx-3">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Consulta
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a class="dropdown-item" href="https://mayamovil.com.mx/oferta">Recargas</a></li>
                                            <li><a class="dropdown-item" href="https://mayamovil.com.mx/cobertura-1">Cobertura</a></li>
                                            <li><a class="dropdown-item" href="https://mayamovil.com.mx/compatibilidad">Compatilidad</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown mx-3">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Portabilidad
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a class="dropdown-item" href="https://mayamovil.com.mx/solicitar">Solicitar</a></li>
                                            <li><a class="dropdown-item" href="https://mayamovil.com.mx/estatus">Estatus</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown mx-3">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Empresas
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a class="dropdown-item" href="https://mayamovil.com.mx/planes">Planes</a></li>
                                            <li><a class="dropdown-item" href="https://mayamovil.com.mx/portabilidad-1">Portabilidad</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown mx-3">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Recarga
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a class="dropdown-item" href="https://mayamovil.com.mx/recarga">Recarga Online</a></li>
                                            <li><a class="dropdown-item" href="#">Punto de Recarga</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item mx-3">
                                        <a class="nav-link" href="https://mayamovil.com.mx/contrata" id="navbarDropdown" role="button">
                                            Contrata
                                        </a>
                                    </li>
                                    <li class="nav-item mx-3">
                                        <a class="nav-link" href="https://mayamovil.com.mx/shop" id="navbarDropdown" role="button">
                                            Tienda
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </nav>

                    <div className='desktop-menu'>
                        <ul className='menu'>
                            <li>
                                <a href="#">Consulta</a>
                                <ul className='dropdown-menu'>
                                    <li>Oferta</li>
                                    <li>Cobertura</li>
                                    <li>Compatibilidad</li>
                                </ul>
                            </li>

                            <li>
                                <a href="#">Portabilidad</a>
                                <ul className='dropdown-menu'>
                                    <li>Solicitar</li>
                                    <li>Estatus</li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Empresas</a>
                                <ul className='dropdown-menu'>
                                    <li>Planes</li>
                                    <li>Portabilidad</li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Recarga</a>
                                <ul className='dropdown-menu'>
                                    <li>Recarga Online</li>
                                    <li>Puntos de Recarga</li>
                                </ul>
                            </li>

                            <li>Contrata</li>
                            <li>Tienda</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}
