import React from 'react'
import "./FooterItem.css"

export default function FooterItem({title,caption,icon}) {
    return (
        <div className="footer-description-box">
            <div className="footer-description-b-img">
                <img src={icon} />
            </div>
            <div>
                <p>{title}</p>
                <span>{caption}</span>
            </div>
        </div>
    )
}
