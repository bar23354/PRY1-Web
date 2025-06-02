import React from 'react'
import Display from './Display'
import KeyPad from './KeyPad'
import useCalculator from '../hooks/useCalculator'
const Calculator = () => {
  const c = useCalculator()
  const handleClick = l => l >= '0' && l <= '9' ? c.inputNumber(l) : 
    l === '.' ? c.inputDecimal() : l === 'C' ? c.clear() : l === '=' ? c.performOperation('=') : 
    l === '%' ? c.performOperation('%') : l === '+/-' ? c.toggleNegative() : 
    c.performOperation(l === '×' ? '*' : l === '÷' ? '/' : l)

  return (
    <div className="calculator">
      <Display value={c.display} />
      <KeyPad onButtonClick={handleClick} />
    </div>
  )
}
export default Calculator