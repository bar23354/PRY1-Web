import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from '../components/Button'

describe('Button Component', () => {
  test('renders with label', () => {
    const { getByText } = render(<Button label="1" onClick={() => {}} />)
    expect(getByText('1')).toBeInTheDocument()
  })

  test('calls onClick when clicked', () => {
    const mockOnClick = jest.fn()
    const { getByText } = render(<Button label="1" onClick={mockOnClick} />)
    fireEvent.click(getByText('1'))
    expect(mockOnClick).toHaveBeenCalledWith('1')
  })

  test('renders button with correct class', () => {
    const { getByText } = render(<Button label="+" className="operator" onClick={() => {}} />)
    expect(getByText('+')).toHaveClass('operator')
  })

  test('applies multiple classes correctly', () => {
    const { getByText } = render(<Button label="0" className="zero" onClick={() => {}} />)
    const button = getByText('0')
    expect(button).toHaveClass('button')
    expect(button).toHaveClass('zero')
  })

  test('handles function buttons correctly', () => {
    const mockOnClick = jest.fn()
    const { getByText } = render(<Button label="C" className="function" onClick={mockOnClick} />)
    const button = getByText('C')
    expect(button).toHaveClass('function')
    fireEvent.click(button)
    expect(mockOnClick).toHaveBeenCalledWith('C')
  })
})