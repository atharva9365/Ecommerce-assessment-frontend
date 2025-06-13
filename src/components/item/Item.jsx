import React from 'react'
import "./item.css"
import { Link } from 'react-router'

const Item = ({ id, name, image, new_price, old_price }) => {
  return (
    <div className='item'>
      <Link to={`/product/${id}`}>
        <img onClick={window.scrollTo(0,0)} src={image} alt={name} />
      </Link>
      <p>{name}</p>
      <div className='item-prices'>
        <div className='item-price-new'>&#8377;{new_price}</div>
        <div className='item-price-old'>&#8377;{old_price}</div>
      </div>
    </div>
  )
}

export default Item