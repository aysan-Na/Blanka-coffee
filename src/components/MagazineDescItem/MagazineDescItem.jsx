import React from 'react'
import "./MagazineDescItem.css"

export default function MagazineDescItem(item) {
    return (
        <div className='last-magazine-item'>
            <div className='row'>
                <div className='col-3'>
                    <img src={process.env.PUBLIC_URL + item.img} />
                </div>
                <div className='last-m-caption col-9'>
                    <p>{item.title}</p>
                    <p>در این مقاله از سایت بلانکا به {item.message} برای شما عزیزان خواهیم پرداخت.با ما همراه باشید.</p>
                </div>
            </div>
        </div>
    )
}
