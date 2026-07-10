import React, { useState } from 'react'
import './Section.css'
import { Row } from 'react-bootstrap'
import data from '../../data'
import Counter from '../Counter/Counter'
import Typewriter from 'typewriter-effect'


export default function Section() {

    const [count, setCount] = useState(data.count)

    return (
        <section>
            <div className="banner">
                <div className="banner-titr">

                    <Typewriter
                        
                        onInit={typeWriter => {
                            typeWriter
                            .typeString(`<span style="color:var(--color-brown);font-weight:700;font-size:60px;">قهوت</span> یادت نره!`)
                            .start()
                            .pauseFor(2500)
                            .deleteAll()
                        }}
                        options={{
                            loop : true
                        }}
                    />
                </div>
                <p>بهترین و با کیفیت ترین قهوه ها و اکسسوری ها در خانه قهوه بلانکا</p>
                <br />
                <a href="#">نمایش محصولات</a>
                <div className="banner-details">
                    <div className="banner-details-img">
                        <img src={process.env.PUBLIC_URL + "img/banner.svg"} alt="قهوه" />
                        <p>COFFEE</p>
                    </div>
                    <div className="banner-details-caption">
                        <Row lg={4} md={2} sm={1} xs={1}>
                            {count.map(item => (
                                <Counter title={item.title} number={item.number} />
                            ))}

                        </Row>
                    </div>
                </div>
            </div>
        </section>
    )
}
