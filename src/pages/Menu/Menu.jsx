import React, { useState } from 'react'
import "./Menu.css"
import LittleSearchBar from '../../components/LittleSearchBar/LittleSearchBar'
import MenuBarItem from '../../components/MenuBarItem/MenuBarItem'
import MenuBoxItem from '../../components/MenuBoxItem/MenuBoxItem'
import data from '../../data'
import { triggerRefresh } from '../../hooks/useRefreshState'
import { ToastContainer, toast } from 'react-toastify';

export default function Menu() {

  const [menus, setMenus] = useState(data.menus)
  const [activeMenu, setActiveMenu] = useState('coffee')
  const products = []
  const [basket, setBasket] = useState([])


  menus.forEach(menu => {
    menu.items.forEach(item => {
      products.push(item)
    })
  })

  const clickMenuHandler = (active) => {
    setActiveMenu(active)
  }

  const clickBasketHandler = (item) => {
    data.basket.push(item)
    setBasket(data.basket)
    triggerRefresh()
    toast.success("به سبد خرید شما اضافه شد!", {
      position: "bottom-right",
    });
  }
  return (
    <>
      <main className='mainMenu'>
        <div className='divMenu' >
          <div className='row'>
            <div className='col-lg-3 col-md-12'>
              <LittleSearchBar
                type="buy"
                products={products}
                clickBasketHandler={clickBasketHandler}
                title="جستجو بین منو . . ."
              />
            </div>
            <div className='col-lg-9 col-md-12'>
              <div className='Menu-bar-box'>
                {menus.map(menu => (
                  <MenuBarItem
                    title={menu.title}
                    img={menu.img}
                    active={menu.name === activeMenu ? true : false}
                    clickHandler={() => clickMenuHandler(menu.name)}
                  />
                ))}
              </div>

              {menus.map(menu => (
                menu.name === activeMenu && (
                  <>
                    <div className='Menu-title'>
                      <img src={menu.img} /> <span>{menu.title}</span>
                    </div>
                    <div className='Menu-box-items'>
                      <ToastContainer />
                      <div className='row'>
                        {menu.items.map(item => (
                          <MenuBoxItem
                            title={item.title}
                            img={item.img}
                            caption={item.caption}
                            price={item.price}
                            clickBasketHandler={() => clickBasketHandler(item)}
                          />
                        ))}
                      </div>
                    </div>
                  </>
                )
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
