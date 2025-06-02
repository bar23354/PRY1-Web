import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import KeyPad from '../components/KeyPad'

describe('KeyPad Component', () => {
  test('renders all buttons', () => {
    const { getByText } = render(<KeyPad />)
    const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '×', '÷', '=', 'C', '+/-', '%']
    buttons.forEach(button => {
      expect(getByText(button)).toBeInTheDocument()
    })
  })

  test('calls onClick function when a button is clicked', () => {
    const mockOnClick = jest.fn()
    const { getByText } = render(<KeyPad onButtonClick={mockOnClick} />)

    fireEvent.click(getByText('1'))
    expect(mockOnClick).toHaveBeenCalledWith('1')

    fireEvent.click(getByText('+'))
    expect(mockOnClick).toHaveBeenCalledWith('+')
    
    fireEvent.click(getByText('÷'))
    expect(mockOnClick).toHaveBeenCalledWith('÷')
    
    fireEvent.click(getByText('×'))
    expect(mockOnClick).toHaveBeenCalledWith('×')

    fireEvent.click(getByText('C'))
    expect(mockOnClick).toHaveBeenCalledWith('C')
  })
})