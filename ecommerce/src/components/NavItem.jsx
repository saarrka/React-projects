import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({children, className, to}) => {
  return (
    <Link className={`nav-link ${className}`} to={to}>{children}</Link>
  )
}

export default NavItem