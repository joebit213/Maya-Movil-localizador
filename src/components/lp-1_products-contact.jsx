import React from 'react'

export default function ProductContant() {
    return (
      <div className='row products-contact'>
      <div className='contact-title'>
        <h4>SÚPER PAQUETES</h4>
      </div>

      <div className='row justify-center cards-products-lp1'>
        <div className='commerce-card_product w-30 cards-product'>
          <div className='card_product-title'>
            <h5>Motorola</h5>
          </div>
          <div className='data-top d-flex-center bg-image_card'>
              <div className='commercename-icon'>
                <img src="https://res.cloudinary.com/dn3s8lyeh/image/upload/v1651494038/maya/PAMK0009SV-NEW_Motorola_G30_128GB_Gray_-_Latin_Spec.png" alt="" />
              </div>
          </div>
          <div className='data-center d-flex-center'>
              <div className='commercename-name'>
                <p className='no-margin'><strong>Moto E</strong>ci</p>
             
                <span><small>Celular 6.47", 128GB</small></span>
              </div>
              <div className='commercename-k price-product_card'>
                <span><small>$3,299</small></span> <span className='main-price'>$2,691.06</span>
              </div>
          </div>
            <div className='btn-commerces btn-card_product'>
              <span> COMPRAR AHORA </span>
          </div>
        </div>

        <div className='commerce-card_product w-30 cards-product'>
          <div className='card_product-title'>
            <h5>Samsung</h5>
          </div>
          <div className='data-top d-flex-center bg-image_card'>
              <div className='commercename-icon'>
                <img src="https://res.cloudinary.com/dn3s8lyeh/image/upload/v1651580157/maya/SM-A107MDRDTPA-NEW_Samsung_Galaxy_A10s_32GB_Dual_Sim_Red_2.png" alt="" />
              </div>
          </div>
          <div className='data-center d-flex-center'>
              <div className='commercename-name'>
                <p className='no-margin'><strong>GALAXY A10s</strong></p>
                
                <span><small>Celular 6.2", 32GB</small></span>
              </div>
              <div className='commercename-k price-product_card'>
                <span><small>$3,699</small></span> <span className='main-price'>$2,892.04</span>
              </div>
          </div>
            <div className='btn-commerces btn-card_product'>
            <span> COMPRAR AHORA </span>
          </div>
        </div>

        <div className='commerce-card_product w-30 cards-product'>
          <div className='card_product-title'>
            <h5>Huawei</h5>
          </div>
          <div className='data-top d-flex-center bg-image_card'>
              <div className='commercename-icon'>
                <img src="https://res.cloudinary.com/dn3s8lyeh/image/upload/v1651494037/maya/616_kGLMqJL._AC_SX679_.jpg" alt="" />
              </div>
          </div>
          <div className='data-center d-flex-center'>
              <div className='commercename-name'>
                <p className='no-margin'><strong>P30 LITE</strong></p>
              
                <span><small>Celular 6.4", 128GB</small></span>
              </div>
              <div className='commercename-k price-product_card'>
                <span><small>$6,799</small></span> <span className='main-price'>$4,393.04</span>
              </div>
          </div>
            <div className='btn-commerces btn-card_product'>
            <span> COMPRAR AHORA </span>
          </div>
        </div>

      </div>

      <div className='row justify-center'>
        <div className='w-60 contact_form-box'>
          <div>
            <img className='img-contact' src="https://res.cloudinary.com/dn3s8lyeh/image/upload/v1651576036/maya/WEB_GRAFICOS-31.png" alt="" />
          </div>
          <div>
            <p>Recibe promociones, ofertas y noticias de MAYA móvil</p>
          </div>
          <div>
            <input className='input-send' type="mail" placeholder='Tu correo electronico' id='mail' />
            <button className='btn-send'>Suscribirme</button>
          </div>
        </div>
        <div className='w-30 contact_find-box'>
          <div>
            <h3>¿Por qué cambiarme <br /> a MAYA móvil?</h3>
          </div>
          <div>
            <button className='contact_find-btn'>Descubrir</button>
          </div>
        </div>
      </div>
    </div>
    )
}