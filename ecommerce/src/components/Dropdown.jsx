import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({title, items}) => {
  return (
    <div className="nav-item dropdown me-3">
        <Link className="navdivnk dropdown-toggle text-dark text-decoration-none" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {title}
        </Link>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            {items.map((item,index) => (
                <li key={index}>
                    <Link className="dropdown-item" to={item.href}>{item.label}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Dropdown