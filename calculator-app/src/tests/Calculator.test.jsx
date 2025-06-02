import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Calculator from '../components/Calculator'

describe('Calculator Component', () => {
  test('renders correctly', () => {
    const { container } = render(<Calculator />)
    const displayElement = container.querySelector('.display')
    expect(displayElement.textContent).toBe('0')
  })

  test('displays numbers when buttons are pressed', () => {
    const { container, getByText } = render(<Calculator />)
    fireEvent.click(getByText('1'))
    fireEvent.click(getByText('2'))
    const displayDiv = container.querySelector('.display')
    expect(displayDiv.textContent).toBe('12')
  })

  test('performs addition correctly', () => {
    const { container, getByText } = render(<Calculator />)
    fireEvent.click(getByText('1'))
    fireEvent.click(getByText('+'))
    fireEvent.click(getByText('2'))
    fireEvent.click(getByText('='))
    const displayDiv = container.querySelector('.display')
    expect(displayDiv.textContent).toBe('3')
  })

  test('performs subtraction correctly', () => {
    const { container, getByText } = render(<Calculator />)
    fireEvent.click(getByText('5'))
    fireEvent.click(getByText('-'))
    fireEvent.click(getByText('3'))
    fireEvent.click(getByText('='))
    const displayDiv = container.querySelector('.display')
    expect(displayDiv.textContent).toBe('2')
  })

  test('displays ERROR for negative results', () => {
    const { container, getByText } = render(<Calculator />)
    fireEvent.click(getByText('3'))
    fireEvent.click(getByText('-'))
    fireEvent.click(getByText('5'))
    fireEvent.click(getByText('='))
    const displayDiv = container.querySelector('.display')
    expect(displayDiv.textContent).toBe('ERROR')
  })

  test('performs multiplication correctly', () => {
    const { container, getByText } = render(<Calculator />)
    fireEvent.click(getByText('3'))
    fireEvent.click(getByText('×'))
    fireEvent.click(getByText('4'))
    fireEvent.click(getByText('='))
    const displayDiv = container.querySelector('.display')
    expect(displayDiv.textContent).toBe('12')
  })

  test('performs division correctly', () => {
    const { container, getByText } = render(<Calculator />)
    fireEvent.click(getByText('8'))
    fireEvent.click(getByText('÷'))
    fireEvent.click(getByText('4'))
    fireEvent.click(getByText('='))
    const displayDiv = container.querySelector('.display')
    expect(displayDiv.textContent).toBe('2')
  })

  test('performs modulo correctly', () => {
    const { container, getByText } = render(<Calculator />)
    fireEvent.click(getByText('7'))
    fireEvent.click(getByText('%'))
    fireEvent.click(getByText('3'))
    fireEvent.click(getByText('='))
    const displayDiv = container.querySelector('.display')
    expect(displayDiv.textContent).toBe('1')
  })

  test('handles +/- operation correctly', () => {
    const { container, getByText } = render(<Calculator />)
    fireEvent.click(getByText('5'))
    fireEvent.click(getByText('+/-'))
    const displayDiv = container.querySelector('.display')
    expect(displayDiv.textContent).toBe('-5')
  })
})