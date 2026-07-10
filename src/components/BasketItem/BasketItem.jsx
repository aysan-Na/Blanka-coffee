import React from 'react'
import './BasketItem.css'
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function BasketItem(item) {
  return (
    <div className='basket-item'>
        <div>
            <img src={process.env.PUBLIC_URL + item.img} />
            <span>{item.title}</span>
        </div>
        <div className='left'>
            <span>{item.price}T</span>
            <button><DeleteIcon /></button>
        </div>
    </div>
  )
}
