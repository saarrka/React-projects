import React from 'react'
import Message from '../components/Message'
import Cart from '../components/Cart'
import Navbar from '../components/Navbar'


const Layout = ({cart = [], message, onMinus, onPlus, onCancel, onCancelAll, children, showCartAndMessage = true, onBuy}) => {
  return (
    <>
    {showCartAndMessage && message && <Message message={message} />}
      <Navbar numOfArticles={cart.length} />
      {showCartAndMessage && 
      <Cart
        cartItems={cart}
        onMinus={onMinus}
        onPlus={onPlus}
        onCancel={onCancel}
        onCancelAll={onCancelAll}
        onBuy={onBuy}
      />
}
      {children}
    </>
  )
}

export default Layout