import React, { useState, useEffect } from 'react'
import ProductsList from '../components/ProductsList'
import Layout from './Layout'
import Footer from './Footer'

const Women = ({ cart, message, addToCart, onMinus, onPlus, onCancel, onCancelAll, onBuy }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('/products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error))
  }, [])

  const menProducts = products.filter((product) =>
    product.title.toLowerCase().startsWith('men')
  )

  return (
    <>
      <Layout cart={cart}
      message={message}
      onMinus={onMinus}
      onPlus={onPlus}
      onCancel={onCancel}
      onCancelAll={onCancelAll}
      onBuy={onBuy}/>
      <ProductsList
        addToCart={addToCart}
        products={menProducts}
        isWomen={false}
        isMen={true}
      />
      <Footer/>
    </>
  )
}

export default Women
