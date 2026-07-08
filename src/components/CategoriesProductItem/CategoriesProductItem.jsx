import React from 'react'
import "./CategoriesProductItem.css"

export default function CategoriesProductItem({img,title}) {
    return (
        <div className="categories-content-box">
            <img src={img} alt={title} />
            <span>{title}</span>
        </div>
    )
}
