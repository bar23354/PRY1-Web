import React from 'react'

const Button = ({ label, onClick, className = '' }) => {
  return (
    <button className={`button ${className}`} onClick={() => onClick(label)}>
      {label}
    </button>
  )
}

export default Button