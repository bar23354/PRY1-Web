import React from 'react'
import Button from './Button'
const KeyPad = ({ onButtonClick }) => (
  <div className="keypad">
    {['C,+/-,%,÷', '7,8,9,×', '4,5,6,-', '1,2,3,+', '0,.,='].map((row, i) => (
      <div key={i} className="keypad-row">
        {row.split(',').map(label => (
          <Button key={label} label={label} onClick={onButtonClick}
            className={
              /[÷×+\-=]/.test(label) ? 'operator' :
              label === '0' ? 'zero' :
              /[C%]/.test(label) || label === '+/-' ? 'function' : 'number'
            }
          />
        ))}
      </div>
    ))}
  </div>
)
export default KeyPad