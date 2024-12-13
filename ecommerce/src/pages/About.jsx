import React from 'react'
import Layout from './Layout'
import DivContainer from '../components/DivContainer'
import Image from '../components/Image'
import Footer from './Footer'

const About = () => {
  return (
    <>
        <Layout showCartAndMessage={false} />
        <DivContainer className="about-us-container bg-light">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                    <h2 className="mb-4">About Us</h2>
                    <p>
                        Welcome to <strong>EShop</strong>, your one-stop destination for 
                        <em>top-quality products</em> that meet your everyday needs and elevate your lifestyle.
                        Founded in <strong>2023</strong>, we are dedicated to providing unmatched variety,
                        quality, and customer satisfaction.
                    </p>
                    <p>
                        Our mission is simple: to create an online marketplace where convenience 
                        meets creativity. Whether you're searching for the latest trends or timeless classics, 
                        we make shopping enjoyable and hassle-free.
                    </p>
                    <p>
                        <strong>Thank you</strong> for being a part of our journey. We’re more than just a store; 
                        we’re a community. Together, let’s shop smarter and live better!
                    </p>
                </div>
          
                <div className="col-md-6 d-flex flex-column">
                <Image
                    src="/images/about01.jpg"
                    alt="Shopping network"
                    className="img-fluid rounded shadow-sm mb-3 about-img"
                />
                <Image
                    src="/images/about01.png"
                    alt="Shopping app"
                    className="img-fluid rounded shadow-sm about-img"
                />
            </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="row mt-5">
          {/* Mission */}
          <div className="col-md-6">
            <h3 className="mb-3">Our Mission</h3>
            <p>
              Our mission is to provide an exceptional shopping experience by delivering 
              high-quality products, fostering innovation, and putting our customers first. 
              We aim to make every interaction seamless and meaningful, ensuring that 
              we exceed your expectations at every step.
            </p>
            <Image src='/images/mission.jpg'  className='img-fluid rounded about-img'/>
          </div>
          {/* Vision */}
          <div className="col-md-6">
            <h3 className="mb-3">Our Vision</h3>
            <p>
              Our vision is to be a global leader in eCommerce, redefining the way people 
              shop by blending technology, sustainability, and personalization. We strive 
              to build a future where convenience meets conscious consumerism, creating 
              a positive impact on communities worldwide.
            </p>
            <Image src='/images/vision.jpg'  className='img-fluid rounded about-img'/>
          </div>
        </div>
      </div>
    </DivContainer>
    <Footer/>
    </>
  )
}

export default About