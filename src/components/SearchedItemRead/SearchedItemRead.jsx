import React from 'react'
import './SearchedItemRead.css'
import { NavLink } from 'react-router-dom'

export default function SearchedItemRead(product) {
    
    return (
        <div className='searched-item-read'>
            <NavLink to={`/magazine/${product.link}`}>
                <img src={product.img} />
                <span>{product.title}</span>
            </NavLink>
        </div>
    )
}
