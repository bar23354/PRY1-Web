import React from 'react'
import Button from './Button'
const KeyPad = ({ onButtonClick }) => {
  const buttons = [['C', '+/-', '%', '÷'],['7', '8', '9', '×'],['4', '5', '6', '-'],['1', '2', '3', '+'],['0', '.', '=']]
  return (
    <div className="keypad">
      {buttons.map((row, i) => (
        <div key={i} className="keypad-row">
          {row.map(label => (
            <Button key={label} label={label} onClick={onButtonClick} className={
              ['÷', '×', '-', '+', '='].includes(label) ? 'operator' :
              label === '0' ? 'zero' : 
              ['C', '+/-', '%'].includes(label) ? 'function' : 'number'
            } />
          ))}
        </div>
      ))}
    </div>)}
export default KeyPad