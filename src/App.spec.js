import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  screen.getByText('My Counter App')

  screen.getByText('The counter is 0')

  const incrementButton = screen.getByRole('button', { name: 'Increment' })
  incrementButton.click()

  screen.getByText('The counter is 1')
})
