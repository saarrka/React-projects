import ProductsList from '../components/ProductsList'
import Layout from './Layout'
import Footer from './Footer'

const HomePage = ({cart, message, onMinus, onPlus, onCancel, onCancelAll, addToCart, products, onBuy}) => {
  
  return (
    <>
      <Layout cart={cart}
      message={message}
      onMinus={onMinus}
      onPlus={onPlus}
      onCancel={onCancel}
      onCancelAll={onCancelAll}
      onBuy={onBuy}/>
      <ProductsList addToCart={addToCart} products={products} isWomen={true} isMen={true} />
      <Footer />
    </>
  )
}

export default HomePage
