import React, { useEffect, useState } from 'react'
import './Header.css'
import Logo from './Logo/Logo'
import { NavLink } from 'react-router-dom'
import data from '../../data'
import { useGlobalRefresh } from '../../hooks/useRefreshState'
import Basket from '../Basket/Basket'

export default function Header() {

  const [isMenuMobile, setIsMenuMobile] = useState(false)
  const [headerItems, setHeaderItems] = useState(data.header)
  const [activePage, setActivePage] = useState('home')

  const [basketItem, setBasketItem] = useState(data.basket)
  const refresh = useGlobalRefresh()
  const [showBasket, setShowBasket] = useState(false)

  let priceBasket = 0
  basketItem.forEach(item => {
    priceBasket += item.price
  })

  useEffect(() => {
    console.log('component refresh')
  }, [refresh])

  const closeMenuMobile = () => {
    setIsMenuMobile(false)
  }

  const showMenuMobile = () => {
    setIsMenuMobile(true)
  }
  const clickLiHandler = (pageName) => {
    setIsMenuMobile(false)
    setActivePage(pageName)
  }
  const closeBasket = () => {
    setShowBasket(false)
  }

  return (
    <header>
      <div className="menu">
        <div className="menu-right">
          <NavLink to="/">
            <Logo />
          </NavLink>
          <nav>
            <ul>
              {headerItems.map(headerItem => (
                <>
                  <li>
                    <NavLink
                      onClick={() => setActivePage(headerItem.name)}
                      to={headerItem.link}
                    >
                      {headerItem.title}
                    </NavLink>
                  </li><span>|</span>
                </>
              ))}
              <li><a href="#">امکانات بلانکا</a> <img src="/img/icon1.svg" /></li>
            </ul>
          </nav>
        </div>
        <div className="menu-left">
          <div className="search">
            <a href="#"><img src="/img/icon-search.svg" alt="جستجو" /></a>
          </div>
          <div className="loginButton">
            <img src="/img/icon3.svg" alt="ورود/ثبت نام" />
            <span>ورود/ثبت نام</span>
          </div>
          <div className="basket" onClick={() => setShowBasket(true)}>
            <img src="/img/Icon2.svg" alt="سبد خرید" />
            <span className="basket-price">{priceBasket}</span>
            <span>تومان</span>
          </div>
          {showBasket &&
            <Basket
              close={closeBasket}
              price={priceBasket}
              basketItem={basketItem}
            />
          }

        </div>
      </div>

      <div className="menu-mobile">
        <div className="list-menu" >
          <img id="list-menu" src="/img/icon-list.svg" alt="navBarIcon" onClick={showMenuMobile} />
          <div id="list-menu-mobile" className={isMenuMobile ? 'list-menu-mobile d_block' : 'list-menu-mobile'}>
            <div id="menu-close" onClick={closeMenuMobile}>
              <img src="/img/icon-close.png" alt="بستن" />
            </div>
            <div className="main-buttons">
              <a href="#"><img src="/img/icon-search.svg" alt="جستجو" /></a>
              <a href="#"><img src="/img/icon3.svg" alt="ورود/عضویت" /></a>
            </div>
            <div>
              <ul className="nav-mobile">
                {headerItems.map(headerItem => (
                  <>
                    <li className={activePage === headerItem.name ? "active-li" : ""}>
                      <NavLink
                        onClick={() => clickLiHandler(headerItem.name)}
                        to={headerItem.link}
                      >
                        {headerItem.title}
                      </NavLink>
                    </li>
                  </>
                ))}
                <li><span>امکانات بلانکا</span><img src="/img/icon1.svg" /></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="box-logo">
          <Logo />
        </div>

        <div className="cart">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
            <g clpath="url(#000)">
              <path d="M7.8515 4.6377C7.8515 3.90853 8.13796 3.25749 8.71088 2.68457C9.28379 2.11165 9.93483 1.8252 10.664 1.8252C11.3932 1.8252 12.0442 2.11165 12.6171 2.68457C13.19 3.25749 13.4765 3.90853 13.4765 4.6377V8.7002H15.039V6.8252H16.9531L17.4999 18.7002H3.82806L4.37494 6.8252H4.7265V5.2627H2.89056L2.18744 20.2627H19.1406L18.4374 5.2627H15.039V4.6377C15.039 4.05176 14.9218 3.49837 14.6874 2.97754C14.4531 2.44369 14.1341 1.97494 13.7304 1.57129C13.3268 1.16764 12.858 0.848633 12.3242 0.614258C11.8033 0.379883 11.2499 0.262695 10.664 0.262695C10.0781 0.262695 9.52468 0.379883 9.00385 0.614258C8.46999 0.848633 8.00124 1.16764 7.5976 1.57129C7.19395 1.97494 6.87494 2.44369 6.64056 2.97754C6.40619 3.49837 6.289 4.05176 6.289 4.6377V8.7002H7.8515V6.8252H11.6015V5.2627H7.8515V4.6377Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_1_1242">
                <rect width="20" height="20" fill="white" transform="matrix(1 0 0 -1 0.664001 20.2627)" />
              </clipPath>
            </defs>
          </svg>
          <div className="cart-number">{priceBasket}</div>
        </div>
      </div>

    </header>
  )
}
