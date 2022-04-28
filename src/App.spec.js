import { render, screen } from '@testing-library/react'
import App from './App'

test('My Adventure Game', () => {
  render(<App />)

  screen.getByText('My Adventure Game')

  screen.getByText(
    'You are a brave knight who has been given a quest by the king. You must find the princess and save her from the evil dragon.',
  )

  screen.getByText(
    'You are riding through the fields. In the distance, to the north, a castle appears. To the east is the forest.',
  )

  // screen.getByText('There is a castle in the distance, to the north. To the east is the forest.')

  screen.getByRole('button', { name: 'Go north' })
  screen.getByRole('button', { name: 'Go east' })
})
