import React, { useState } from 'react'
import './Basket.css'
import BasketItem from '../BasketItem/BasketItem'

export default function Basket({ close,price, basketItem }) {

    return (
                <div className='basket-box'>
                    <div className='basket-title'>
                        <p>{basketItem.length} کالا</p>
                        <button onClick={close}><img src={process.env.PUBLIC_URL +'/img/icon-close.png'} /></button>
                    </div>
                    <div className='basket-items'>
                        {basketItem.map(item => (
                            <BasketItem {...item} />
                        ))}

                    </div>
                    <div className='amount-pay'>
                        <div>
                            <span>مبلغ قابل پرداخت</span>
                            <p>{price}تومان</p>
                        </div>
                        <button>ثبت سفارش</button>
                    </div>
                </div>
    )
}
