import React from 'react'
import Image from './Image'
import Button from './Button'

const Product = ({title, price, imageSrc, imageAlt, onClick}) => {
  return (
    <div className="d-flex flex-column">
        <Image src={`/images/${imageSrc}`} alt={imageAlt} className="product-image"/>
        <p>{title}</p>
        <span>${price}</span>
        <Button className="blue-button" onClick={onClick}>Add To Cart</Button>
    </div>
  )
}

export default Product