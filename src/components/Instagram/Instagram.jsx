import React from 'react'
import "./Instagram.css"

export default function Instagram() {
  return (
    <section>
            <div className="instagram">
                <div className="insta-id">
                    <div style={{display: "block"}}>
                        <div><span>اینستاگرام </span><span> ما</span></div>
                        <p>CoffeeHouse_blanka@</p>
                    </div>
                </div>
                <div className="insta-img">
                    <img src={process.env.PUBLIC_URL + "/img/instagram.png"} alt="id" />
                </div>
            </div>
        </section>
  )
}
