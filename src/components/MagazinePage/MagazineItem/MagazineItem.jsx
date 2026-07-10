import React from 'react'
import "./MagazineItem.css"
import { HiArrowCircleLeft } from "react-icons/hi";
import { NavLink } from 'react-router-dom' 

export default function MagazineItem(magazine) {
    
    return (
        <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='magezine-item-box'>
                <img src={process.env.PUBLIC_URL +magazine.img}></img>
                <div className='caption-ma'>
                    <h6>{magazine.title}</h6>
                    <p>{magazine.magazineDesc.para1}</p>
                    <div>
                        <span>{magazine.author}</span>
                        <span>{magazine.date}</span>
                    </div>
                    <hr />
                    <NavLink to={`/magazine/${magazine.link}`}>
                        <center>
                            <button> مطالعه مقاله<HiArrowCircleLeft style={{ fontSize: "20px" }} /></button>
                        </center>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
