import React from 'react'
import "./Products.css"
import ProductContent from '../ProductContent/ProductContent'

export default function Products() {
    return (
        <section>
            <div className="products">
                <div className="products-nav">
                    <img src={process.env.PUBLIC_URL +"/img/icon-coffee.svg"} className="icon-coffee" alt="ایکون قهوه" />
                    <h4>جدیدترین محصولات</h4>
                    <div className="products-bet">
                        <ul>
                            <li className="active"><a href="#"></a>انواع قهوه</li>
                            <li>پودریجات</li>
                            <li>دریپ بک</li>
                            <li>سیروپ ها</li>
                            <li>انواع اکسسوری</li>
                        </ul>
                    </div>
                </div>
                <div className="product-content">
                    <ProductContent img={process.env.PUBLIC_URL +"/img/اسپرسو ویتالی.png"} />
                    <ProductContent img={process.env.PUBLIC_URL +"/img/اسپرسو لیدی.png"} />
                    <ProductContent img={process.env.PUBLIC_URL +"/img/اسپرسو دیلی روپل.png"} />
                    <ProductContent img={process.env.PUBLIC_URL +"/img/اسپرسو جیورنو.png"} />
                </div>
            </div>
        </section>
    )
}
