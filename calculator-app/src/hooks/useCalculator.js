import { useState } from 'react'

const useCalculator = () => {
  const [display, setDisplay] = useState('0')
  const [previousValue, setPreviousValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const inputNumber = (num) => {
    if (waitingForOperand) {
      setDisplay(String(num))
      setWaitingForOperand(false)
    } else {
      if (display.length >= 9) return
      setDisplay(display === '0' ? String(num) : display + num)
    }
  }

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.')
      setWaitingForOperand(false)
    } else if (display.indexOf('.') === -1) {
      if (display.length >= 9) return
      setDisplay(display + '.')
    }
  }

  const clear = () => {
    setDisplay('0')
    setPreviousValue(null)
    setOperation(null)
    setWaitingForOperand(false)
  }

  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(inputValue)
    } else if (operation) {
      const currentValue = previousValue || 0
      const newValue = calculate(currentValue, inputValue, operation)

      if (newValue < 0) {
        setDisplay('ERROR')
        setPreviousValue(null)
        setOperation(null)
        setWaitingForOperand(false)
        return
      }

      if (newValue > 999999999) {
        setDisplay('ERROR')
        setPreviousValue(null)
        setOperation(null)
        setWaitingForOperand(false)
        return
      }

      let displayValue = String(newValue)
      if (displayValue.length > 9) {
        displayValue = displayValue.substring(0, 9)
      }

      setDisplay(displayValue)
      setPreviousValue(newValue)
    }

    setWaitingForOperand(true)
    setOperation(nextOperation)
  }

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue
      case '-':
        return firstValue - secondValue
      case '*':
        return firstValue * secondValue
      case '/':
        return secondValue !== 0 ? firstValue / secondValue : 0
      case '%':
        return firstValue % secondValue
      default:
        return secondValue
    }
  }

  const percentage = () => {
    const value = parseFloat(display)
    const newValue = value / 100
    setDisplay(String(newValue))
  }

  const toggleNegative = () => {
    if (display === '0') return
    if (display.indexOf('-') === 0) {
      setDisplay(display.slice(1))
    } else {
      if (display.length >= 9) return
      setDisplay('-' + display)
    }
  }

  return {
    display,
    inputNumber,
    inputDecimal,
    clear,
    performOperation,
    percentage,
    toggleNegative
  }
}

export default useCalculator