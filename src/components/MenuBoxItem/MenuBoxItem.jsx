import React from 'react'
import "./MenuBoxItem.css"

export default function MenuBoxItem({ title,img,caption,price,clickBasketHandler}) {
    return (
        <div className='col-lg-6 col-md-6 col-sm-12' >
            <div className='Menu-box-item' >
                <div className='row'>
                    <div className='col-7'>
                        <p className='title'>{title}</p>
                        <p className='caption'>{caption}</p>
                    </div>
                    <div className='col-5' style={{direction:"ltr"}}>
                        <img src={img}/>
                    </div>
                    <div className='end-of-box'>
                        <p className='price'> <b>{price}</b>   هزار تومان</p>
                        <button onClick={clickBasketHandler}>افزودن</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
