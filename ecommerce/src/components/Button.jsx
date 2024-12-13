import React from 'react'

const Button = ({className, onClick, children}) => {

  return (
    <button className={`border-0 rounded ${className}`} onClick={onClick}>{children}</button>
  )
}

export default Button