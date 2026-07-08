import React from 'react'
import './Home.css'
import Section from '../../components/Section/Section'
import CategoriesProduct from '../../components/CategoriesProduct/CategoriesProduct'
import Products from '../../components/Products/Products'
import TheMenu from '../../components/TheMenu/TheMenu'
import Discount from '../../components/Discount/Discount'
import AboutUs from '../../components/AboutUs/AboutUs'
import Magezians from '../../components/Magezians/Magezians'
import Instagram from '../../components/Instagram/Instagram'


export default function Home() {
    return (
        <main>
            <Section />
            <CategoriesProduct />
            <Products />
            <TheMenu />
            <Discount />
            <AboutUs />
            <Magezians />
            <Instagram />
        </main>
    )
}
