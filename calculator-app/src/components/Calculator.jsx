import React from 'react'
import Display from './Display'
import KeyPad from './KeyPad'
import useCalculator from '../hooks/useCalculator'
const Calculator = () => {const calculator = useCalculator()
  return (
    <div className="calculator">
      <Display value={calculator.display} />
      <KeyPad onButtonClick={(label) => {
        if (label >= '0' && label <= '9') {calculator.inputNumber(label)} else if (label === '.') {calculator.inputDecimal()} else if (label === 'C') {calculator.clear()} else if (label === '=') {calculator.performOperation('=')} else if (label === '%') {calculator.percentage()} else if (label === '+/-') {calculator.toggleNegative()
        } else {
          const op = label === '×' ? '*' : label === '÷' ? '/' : label
          calculator.performOperation(op)
        }
      }} />
    </div>
  )
}
export default Calculator