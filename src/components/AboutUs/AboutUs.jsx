import React from 'react'
import "./AboutUs.css"

export default function AboutUs() {
    return (
        <section>
            <div className="about-us">
                <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                    <div className="about-description">
                        <div>خانه قهوه <span>بلانکا</span><img src={process.env.PUBLIC_URL +"/img/icon-cap.png"} /></div>
                        <p>با بیش از ده سال تجربه در اداره کافه ها و رستوران ها ، و پنج سال سابقه در عرصه ی اموزش و تولید و فروش قهوه  ما در زمینه قهوه به شما اطمینان می دهیم. تخصص ما در ترکیب بی نظیر علم قهوه با تجربه رستورانی ، تجربه ی بی نظیری را برای شما ایجاد خواهیم کرد.</p>
                        <a href="#">درباره ما</a>
                    </div>
                </div>
                <div className="about-image">
                    <img src={process.env.PUBLIC_URL + "/img/Container-about.svg"} />
                    <img src={process.env.PUBLIC_URL + "/img/about-us.jpg"} />
                </div>
            </div>
        </section>
    )
}
