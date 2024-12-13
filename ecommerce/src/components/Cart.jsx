import React from 'react'
import Image from './Image'
import Button from './Button'


const Cart = ({cartItems, onMinus, onPlus, onCancel, onCancelAll, onBuy}) => {
  const total = cartItems.reduce((start, item) => start + item.quantity * item.price, 0)

  console.log('onBuy function:', onBuy);


  return (
    <div className="container cart-container">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? 
            (
            <p>Your cart is empty</p>
        ) : 
        (
            <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item d-flex align-items-center">
                <Image src={`/images/${item.imageSrc}`} alt={item.title} className="cart-item-img me-3" />
                <div className="cart-details flex-grow-1">
                  <p className="cart-item-title mb-1">{item.title}</p>
                  <span className="cart-item-price">${(item.quantity * item.price).toFixed(2)}</span>
                </div>      
                <div className="cart-quantity d-flex align-items-center">
                  <Button className="btn-quantity amount-control bg-dark text-light" onClick={() => onMinus(item.title)}>-</Button>
                  <span className="mx-2 cart-quantity-value">{item.quantity}</span>
                  <Button className="btn-quantity amount-control bg-dark text-light" onClick={() => onPlus(item.title)}>+</Button>
                </div>
                <Button className="btn-cancel ms-3 red-button text-light px-2 py-1" onClick={() => onCancel(item.title)}>Cancel</Button>
              </li>
            ))}
          </ul>
        )}

        <div className="cart-total mt-3 d-flex justify-content-between">
            <h3>Total</h3>
            <span className="cart-total-price">${total.toFixed(2)}</span>
        </div>

        {total != 0.00 && <Button className="btn-cancel ms-3 red-button text-light px-2 py-1" onClick={onCancelAll}>Cancel All</Button>}
        {total != 0.00 && <Button
        className="btn-cancel ms-3 red-button text-light px-2 py-1"
        onClick={onBuy} // Povezivanje funkcije
      >
        Buy
      </Button>}
    
    </div>
  )
}

export default Cart