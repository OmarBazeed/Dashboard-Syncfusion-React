import React from 'react'

const Header = ({category , title}) => {
  return (
    <div>
    <p className='text-muted mb-0'> {category}</p>
    <p className='fs-4 fw-bold'> {title}</p>
    </div>
  )
}

export default Header