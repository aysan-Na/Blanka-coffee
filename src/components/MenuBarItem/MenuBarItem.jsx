import React from 'react'
import "./MenuBarItem.css"

export default function MenuBarItem({ title,img,active,clickHandler }) {
    return (
        <div onClick={clickHandler} className={active ? "Menu-bar-item active" : "Menu-bar-item "}>
            <img src={img} />
            <p>{title}</p>
        </div>
    )
}
