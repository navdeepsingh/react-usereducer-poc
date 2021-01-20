import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import App from './App'

test('renders two buttons', () => {
  render(<App />)
  const buttons = screen.getAllByRole('button')
  expect(buttons).toHaveLength(2)
})

test('increment button', () => {
  render(<App />)
  let counterValue: number
  const counterDisplay = screen.getByRole('heading', {level: 1})
  const incrementButton = screen.getAllByRole('button')[0]

  fireEvent.click(incrementButton)
  counterValue = Number(counterDisplay.textContent)

  expect(counterValue).toEqual(1)
})

test('decrement button', () => {
  render(<App />)
  let counterValue: number
  const counterDisplay = screen.getByRole('heading', {level: 1})
  const decrementButton = screen.getAllByRole('button')[1]

  fireEvent.click(decrementButton)
  counterValue = Number(counterDisplay.textContent)

  expect(counterValue).toEqual(-1)
})
