import React, { useState } from 'react'
import "./LittleSearchBar.css"
import SearchedItemBuy from '../SearchedItemBuy/SearchedItemBuy'
import SearchedItemRead from '../SearchedItemRead/SearchedItemRead'

export default function LittleSearchBar({ type, products, title ,clickBasketHandler}) {

    const [productSearched, setProductSearched] = useState([])

    const searchHandler = e => {
        let inputValue = e.target.value

        const chekedProducts = products.filter(product => {
            return product.title.includes(inputValue.length && inputValue)

        })
        setProductSearched(chekedProducts)
    }
    return (
        <>
            <div className='searchbar'>
                <input onKeyUp={e => searchHandler(e)} placeholder={title}></input>
                <img src={process.env.PUBLIC_URL + "/img/icon-search.svg"} alt="جستجو" />
            </div>

            <div className='searched-items'>
                {productSearched.map(product => (
                    <>
                        {type === 'buy' && <SearchedItemBuy clickBasketHandler={clickBasketHandler} {...product} />}
                        {type === 'read' && <SearchedItemRead {...product} />}

                    </>
                ))}
            </div>

        </>

    )
}
