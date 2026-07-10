import React from 'react'
import "./MenuItem.css"

export default function MenuItem({img,title,price,caption}) {
    return (
        <div className="col-lg-6 col-sm-12">
            <div className="menu-bar-child">
                <div className="menu-img">
                    <img src={process.env.PUBLIC_URL +img} alt={title}/>
                </div>
                <div className="menu-details">
                    <div className='menu-details-title'>
                        <span className='title'>{title}</span>
                        <div className='menu-d-border'></div>
                        <span className='price'>{price}T</span>
                    </div>
                    <p className='menu-details-caption'>{caption}</p>
                </div>
            </div>
        </div>
    )
}
