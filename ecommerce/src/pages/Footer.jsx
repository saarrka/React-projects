import React from 'react'

const Footer = () => {
  return (
    <footer className="footer bg-dark d-flex justify-content-center align-items-center">
      <div className='container'>
        <p className='text-light'>© {new Date().getFullYear()} EShop. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer