import React from 'react'

const Display = ({ value }) => {
  const displayValue = value && value.length > 9 ? value.substring(0, 9) : value
  
  return (
    <div className="display">
      {displayValue}
    </div>
  )
}

export default Display