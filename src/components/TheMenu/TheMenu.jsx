import React, { useState } from 'react'
import "./TheMenu.css"
import MenuItem from '../MenuItem/MenuItem'
import data from '../../data'
import { NavLink } from 'react-bootstrap'

export default function TheMenu() {

    const [itemsMenu, setItemsMenu] = useState(data.populerMenu)

    return (
        <section>
            <div className="menu">
                <h4>پرطرفدارترین های منو</h4>
                <img src="img/icon-coffee.svg" className="icon-coffee" alt="ایکون قهوه" />
                <NavLink to='/menu'>
                    <p>محصولات پرطرفدار خانه قهوه بلانکا که علاقه مندان زیادی دارد را با بهترین کیفیت تجربه کنید برای مشاهده تمام محصولات <a>کلیک کنید.</a></p>
                </NavLink>
                <div className="menu-bar">
                    <div className="row">
                        {itemsMenu.map(item => (
                            <MenuItem {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
