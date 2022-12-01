import React from 'react'

const Button = ({color , background , title , borderRadius}) => {
  return (
    <React.Fragment>
      <button className={`btn text-capitalize`} style={{background , color , borderRadius}}>
      {title}
      </button>
    </React.Fragment>
  )
}

export default Button