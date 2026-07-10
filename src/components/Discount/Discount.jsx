import React from 'react'
import "./Discount.css"

export default function Discount() {
  return (
    <section>
            <div className="discount">
                <div>
                    <div className="discount-box">
                       <div>
                           <h4>دانه قهوه مخصوص فراوری شده بلانکا</h4>
                           <p>همچنین <span>25%</span> تخفیف روی تمامی کالاها</p>
                           <a href="#">خرید</a>
                       </div>
                       <div>
                           <img src={process.env.PUBLIC_URL + "img/pack.png"} alt="بسته قهوه" />
                       </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
