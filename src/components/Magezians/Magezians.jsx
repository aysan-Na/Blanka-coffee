import React from 'react'
import "./Magezians.css"
import MagezianBox from '../MagezianBox/MagezianBox'

export default function Magezians() {
  return (
    <section>
            <div className="magezians">
                <img className="first-pattern-magezian" src={process.env.PUBLIC_URL +"/img/zikzak-icon.svg"} />
                <img className="second-pattern-magezian" src={process.env.PUBLIC_URL +"/img/zikzak-icon.svg"} />

                <div className="magezians-header">
                    <img src={process.env.PUBLIC_URL + "/img/icon-coffee.svg"} className="icon-coffee" alt="ایکون قهوه" />
                    <h4>مقالات آموزشی</h4>
                    <p>مقالات و اموزش های خانه قهوه بلانکا</p>
                </div>
                <div className="magezians-box">
                    <MagezianBox img={process.env.PUBLIC_URL + "/img/magezian2.png"} />
                    <MagezianBox img={process.env.PUBLIC_URL + "/img/magezian3.png"} />
                    <MagezianBox img={process.env.PUBLIC_URL + "/img/magezian1.png"} />
                </div>
            </div>
        </section>
  )
}
