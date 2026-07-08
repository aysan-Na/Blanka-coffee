import React from 'react'
import "./Breadcrumb.css"
import { IoHomeOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";


export default function Breadcrumb({ links }) {
  return (
    <div className='breadcrumb'>
      <div className='breadcrumb-box'>
        <NavLink to='/' >
          <IoHomeOutline className='breadC-icon' />
        </NavLink>
        <IoIosArrowBack className='bread-Arrow-icon' />
      </div>
      {links.map((link) => (
        <div className='breadcrumb-box'>
          <NavLink style={{ color: "white" }} to={link.to} >
            {link.title}
          </NavLink>
          {links.length !== link.id && <IoIosArrowBack className='bread-Arrow-icon' />}
        </div>
      ))}
    </div>
  )
}
