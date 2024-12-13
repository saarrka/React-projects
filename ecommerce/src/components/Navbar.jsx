import React from 'react'
import Image from './Image'
import Dropdown from './Dropdown'
import NavItem from './NavItem'
import {Link} from 'react-router-dom'

const Navbar = ({numOfArticles}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container d-flex align-items-center justify-content-between">
            <Link to='/'>
                <Image src="/images/logo.jpg" className="nav-img me-3" alt="Logo" />
            </Link>
            
            <div className="d-flex align-items-center">
                <Dropdown title="Categories" items={[
                    {label : "Women", href : "/women"},
                    {label : "Men", href : "/men"}

                ]}/>
                <NavItem className="me-3" to='/about'>About Us</NavItem>
                
                <div className="cart-icon position-relative ms-3">
                    <NavItem>
                        <i className="fas fa-shopping-cart"></i>
                    </NavItem>
                    <span className="cart-count position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {numOfArticles}
                    </span>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar