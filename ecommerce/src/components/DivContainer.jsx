import React from 'react'


const DivContainer = ({children}) => {
  return (
    <div className="d-flex justify-content-between align-items-center my-5">
        {children}
    </div>
  )
}

export default DivContainer