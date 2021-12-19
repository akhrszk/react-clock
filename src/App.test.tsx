import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { MemoryRouter } from 'react-router'

test('renders learn react link', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )
  const titleElement = screen.getByText(/clock/i)
  expect(titleElement).toBeInTheDocument()
})
