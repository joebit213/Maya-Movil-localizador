import React from 'react'
import Map from './map'
import Header from './header'
import Cover from './cover'
import Footer from './footer'

export default function Maya() {
    return (
        <div>
            <Header />
            <Cover />
            <img className="w-75 d-block mx-auto mt-3" src='https://cdn.shopify.com/s/files/1/0461/4861/6346/files/bannerrecargas.jpg?v=1642025216' />
               
            <h1 className="mt-5">MAYA MÓVIL A TU MEDIDA</h1>
            <h3 className="mb-4">Ubica tu punto de recarga más cercano</h3>
            <Map />
            <Footer />
        </div>
    )
}
