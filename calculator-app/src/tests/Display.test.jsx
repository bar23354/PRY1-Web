import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Display from '../components/Display'

describe('Display Component', () => {
  test('renders with initial value', () => {
    const { container } = render(<Display value="0" />)
    expect(container.querySelector('.display').textContent).toBe('0')
  })

  test('displays concatenated input', () => {
    const { container } = render(<Display value="123" />)
    expect(container.querySelector('.display').textContent).toBe('123')
  })

  test('shows ERROR for negative numbers', () => {
    const { container } = render(<Display value="ERROR" />)
    expect(container.querySelector('.display').textContent).toBe('ERROR')
  })

  test('shows ERROR for numbers greater than 999999999', () => {
    const { container } = render(<Display value="ERROR" />)
    expect(container.querySelector('.display').textContent).toBe('ERROR')
  })

  test('displays decimal point correctly', () => {
    const { container } = render(<Display value="123.4" />)
    expect(container.querySelector('.display').textContent).toBe('123.4')
  })

  test('does not display more than 9 characters', () => {
    const { container } = render(<Display value="1234567890" />)
    expect(container.querySelector('.display').textContent).toBe('123456789')
  })
})