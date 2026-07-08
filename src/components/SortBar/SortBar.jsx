import React, { useState } from 'react'
import './SortBar.css'

export default function SortBar({ clickSortHandler, items }) {
    const [buttons, setButtons] = useState([
        { id: 1, title: 'عادی', name: 'normal' },
        { id: 2, title: 'جدیدترین', name: 'newest' },
        { id: 3, title: 'قدیمی ترین', name: 'oldest' }
    ])
    const itemsMAgazine = []
    const [activeSort, setActiveSort] = useState('normal')
    const clickHandler = (active) => {
        setActiveSort(active)
        clickSortHandler(active)
    }

    return (
        <div className='sortbar'>
            <span>مرتب سازی بر اساس :</span>
            {buttons.map(button => (
                <button
                    onClick={() => clickHandler(button.name)}
                    key={button.id}
                    className={button.name === activeSort ? 'active' : ''}
                >
                    {button.title}
                </button>
            ))}

        </div>
    )
}
