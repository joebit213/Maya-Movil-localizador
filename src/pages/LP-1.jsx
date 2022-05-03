import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import CardsBottom from '../components/lp-1_cardsBottom'
import CardsTop from '../components/lp-1_cardsTop'
import CoverLp1 from '../components/lp-1_cover'
import CoverBottomLp1 from '../components/lp-1_coverBottom'
import ProductContant from '../components/lp-1_products-contact'


export default function LP1() {
    return (
        <div>
            <Header />
            <CoverLp1 />
            <CardsTop />
            <CardsBottom />
            <CoverBottomLp1 />
            <ProductContant />
            <Footer />
        </div>
    )
}
