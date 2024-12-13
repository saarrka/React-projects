import React from 'react'

const Link = ({linkName = "#", className = '', onClick, children, ...props}) => {
  return (
    <a href={linkName} className={`text-dark text-decoration-none  ${className}`} onClick={onClick} {...props}>{children}</a>
  )
}

export default Link