import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Women from './pages/Women'
import Men from './pages/Men'
import About from './pages/About'
import { useState, useEffect } from 'react'


function App() {

  const [cart, setCart] = useState([])
  const [message, setMessage] = useState('')
  const [products, setProducts] = useState([])
  

  useEffect(() => {
    fetch('/products.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Products loaded:', data);
      setProducts(data)
    })
    .catch(error => {
      console.error('Error loading products:', error);
    })
  
  }, [])

  const addToCart = (product) => {
    const isAlreadyInCart = cart.some((item) => item.title === product.title)
    if (isAlreadyInCart) {
      setMessage(`${product.title} is already added to cart`)
    } else {
      setCart((prevCart) => [
        ...prevCart,
        { ...product, quantity: 1 },
      ])
      setMessage(`${product.title} added to cart!`)
    }
    setTimeout(() => setMessage(''), 5000)
  }

  const onMinus = (productTitle) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.title === productTitle && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    )
  }

  const onPlus = (productTitle) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.title === productTitle && item.quantity < 10
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  const onCancel = (productTitle) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.title !== productTitle)
    )
  }

  const onCancelAll = () => {
    setCart([])
  }

  const onBuy = () => {
    console.log('onBuy clicked!'); // Debug log
    setCart([]); // Prazni korpu
    setMessage('Your order was successful'); // Postavlja poruku
    setTimeout(() => setMessage(''), 5000); // Briše poruku posle 5 sekundi
  };
  

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={
          <HomePage 
          cart={cart}
          message={message}
          addToCart={addToCart}
          onMinus={onMinus}
          onPlus={onPlus}
          onCancel={onCancel}
          onCancelAll={onCancelAll}
          products={products}
          onBuy={onBuy}
        />} />
        <Route path="/women" element=
        {<Women 
          cart={cart}
          message={message}
          addToCart={addToCart}
          onMinus={onMinus}
          onPlus={onPlus}
          onCancel={onCancel}
          onCancelAll={onCancelAll}
          products={products}
          onBuy={onBuy}
           />
          } />
        <Route path="/men" element=
        {<Men 
          cart={cart}
          message={message}
          addToCart={addToCart}
          onMinus={onMinus}
          onPlus={onPlus}
          onCancel={onCancel}
          onCancelAll={onCancelAll}
          products={products}
          onBuy={onBuy}
          />} />
        <Route path="/about" element={<About />} />
        
      </>
    )
  )

  return (
    <>
      <RouterProvider router={router}></RouterProvider>

    </>
  )
}

export default App

/*
  <>
      {message && <Message message={message}/> }
      <Navbar numOfArticles={cart.length}/>
      <Cart cartItems={cart} onMinus={onMinus} onPlus={onPlus} onCancel={onCancel} onCancelAll={onCancelAll}/>
      <ProductsList addToCart={addToCart}/>

    </>
*/