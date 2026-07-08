import React from 'react'
import "./ProductContent.css"

export default function ProductContent({img}) {
    return (
        <div className="product-content-box">
            <div className="product-img-box">
                <img src={img} />
                <div></div>
            </div>
            <p>دانه قهوه</p>
            <div className="price-box">
                <span>تومان 345،000 </span><span> تومان 355،000</span>
            </div>
            <br />
            <button>افزودن به سبد خرید</button>
        </div>
    )
}
