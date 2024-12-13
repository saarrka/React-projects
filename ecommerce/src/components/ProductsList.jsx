import React, { useState } from 'react';
import Product from './Product'; 
import DivContainer from './DivContainer'; 
import Button from './Button'; 
import MainContainer from './MainContainer';

const ProductsList = ({addToCart, products, isWomen, isMen}) => {
  const [showMoreMen, setShowMoreMen] = useState(false);
  const [showMoreWomen, setShowMoreWomen] = useState(false);

  const toggleShowMoreMen = () => {
    setShowMoreMen(!showMoreMen);
  };

  const toggleShowMoreWomen = () => {
    setShowMoreWomen(!showMoreWomen);
  };

  if (!products || products.length === 0) {
    return <div>Loading products...</div>;  // Prikazuje poruku dok proizvodi ne budu učitani
  }


  const womenProducts = products.filter((product) => product.title.toLowerCase().startsWith("women"))
  const menProducts = products.filter((product) => product.title.toLowerCase().startsWith("men"))

  const firstSetOfWomenProducts = womenProducts.slice(0, 3); 
  const secondSetOfWomenProducts = womenProducts.slice(3);

  const firstSetOfMenProducts = menProducts.slice(0, 3); 
  const secondSetOfMenProducts = menProducts.slice(3);

  return (
    <MainContainer>
      {isWomen &&
    
      (<DivContainer>
        {firstSetOfWomenProducts.map((product, index) => (
          <Product
            key={index}
            title={product.title}
            price={product.price}
            imageSrc={product.imageSrc}
            imageAlt={product.imageAlt}
            className="product-image"
            onClick={() => addToCart(product)}
          />
        ))}
      </DivContainer>
      )}

      {showMoreWomen && (
        <DivContainer>
          {secondSetOfWomenProducts.map((product, index) => (
            <Product
              key={index}
              title={product.title}
              price={product.price}
              imageSrc={product.imageSrc}
              imageAlt={product.imageAlt}
              className="product-image"
              onClick={() => addToCart(product)}
            />
          ))}
        </DivContainer>
      )}

      
      {isWomen &&
        <Button className="bg-dark text-light px-3 py-2" onClick={toggleShowMoreWomen}>
          {showMoreWomen ? "See less" : "See more"}
        </Button>
      }

      {isMen &&
      (<DivContainer>
        {firstSetOfMenProducts.map((product, index) => (
          <Product
            key={index}
            title={product.title}
            price={product.price}
            imageSrc={product.imageSrc}
            imageAlt={product.imageAlt}
            className="product-image"
            onClick={() => addToCart(product)}
          />
        ))}
      </DivContainer>
    )}

      {showMoreMen && (
        <DivContainer>
          {secondSetOfMenProducts.map((product, index) => (
            <Product
              key={index}
              title={product.title}
              price={product.price}
              imageSrc={product.imageSrc}
              imageAlt={product.imageAlt}
              className="product-image"
              onClick={() => addToCart(product)}
            />
          ))}
        </DivContainer>
      )}

      {isMen &&
        <Button className="bg-dark text-light px-3 py-2" onClick={toggleShowMoreMen}>
          {showMoreMen ? "See less" : "See more"}
        </Button>
      }
    </MainContainer>
  );
};

export default ProductsList;
