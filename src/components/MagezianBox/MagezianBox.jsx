import React from 'react'
import "./MagezianBox.css"

export default function MagezianBox({img}) {
    return (
        <div className="magezians-box-child">
            <div>
                <img src={img} />
                <div className="magezian-description">
                    <h6>چگونه قهوه خانگی درست کنیم؟</h6>
                    <p>راهنمای کامل اموزش درست کردن قهوه در خانه</p>
                    <p>مقدمه:قهوه یک از محبوب تریم نوشیدنی های دنیاست و بسیاری از افراد لذت می برند.</p>
                    <br />
                    <a href="#">ادامه مطلب>></a>
                </div>
            </div>
        </div>
    )
}
