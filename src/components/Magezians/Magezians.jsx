import React from 'react'
import "./Magezians.css"
import MagezianBox from '../MagezianBox/MagezianBox'

export default function Magezians() {
  return (
    <section>
            <div className="magezians">
                <img className="first-pattern-magezian" src="img/zikzak-icon.svg" />
                <img className="second-pattern-magezian" src="img/zikzak-icon.svg" />

                <div className="magezians-header">
                    <img src="img/icon-coffee.svg" className="icon-coffee" alt="ایکون قهوه" />
                    <h4>مقالات آموزشی</h4>
                    <p>مقالات و اموزش های خانه قهوه بلانکا</p>
                </div>
                <div className="magezians-box">
                    <MagezianBox img="img/magezian2.png" />
                    <MagezianBox img="img/magezian3.png" />
                    <MagezianBox img="img/magezian1.png" />
                </div>
            </div>
        </section>
  )
}
