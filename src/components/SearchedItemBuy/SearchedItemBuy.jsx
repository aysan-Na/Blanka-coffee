import React from 'react'
import { SlBasket } from "react-icons/sl";
import './SearchedItemBuy.css'


export default function SearchedItemBuy({img,price,title,clickBasketHandler}) {
    return (
        <div className='searched-item'>
            <div className='searched-right'>
                <img src={process.env.PUBLIC_URL +img} />
                <span>{title}</span>
            </div>
            <div className='searched-left'>
                <span>{price}T</span>
                <button onClick={() =>clickBasketHandler({img,price,title})}><SlBasket /></button>
            </div>

        </div>
    )
}
