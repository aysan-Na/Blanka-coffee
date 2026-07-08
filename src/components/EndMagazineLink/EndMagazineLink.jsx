import React, { useState } from 'react'
import './EndMagazineLink.css'
import { NavLink } from 'react-router-dom'
import data from '../../data'

export default function EndMagazineLink() {
    const [magazines, setMagazines] = useState([...data.magazine].slice(0, 4))

    return (
        <div className='end-magazine-link'>
            <p>بیشتر بخوانید :</p>
            {magazines.map(magazine => (
                <div>
                    <NavLink to={`/magazine/${magazine.link}`}>{magazine.title}</NavLink>
                </div>
            ))}
        </div>
    )
}
