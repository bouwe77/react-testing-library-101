import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './Game'

test('My Adventure Game', async () => {
  render(<App />)

  screen.getByText('My Adventure Game')

  screen.getByText(
    'You are a brave knight who has been given a quest by the king. You must find the princess and save her from the evil dragon. You are riding through the fields.',
  )

  screen.getByText('You are on your horse, in the fields, staring into the distance. There, you can see a castle.')
  screen.getByText('On your right is the forest.')

  // I just wanna know the "Head into the forest" button's there
  screen.getByRole('button', { name: 'Head into the forest' })

  // I wanna know the "Go to the castle" button's there, but I also assign it, so I can click it
  const toCastle = screen.getByRole('button', { name: 'Go to the castle' })
  await userEvent.click(toCastle)

  // Normally you have to wait for a state update, but because we've already waited for the click, we can just check the text
  screen.getByText('You are standing in front of the castle. The drawbridge is open.')

  // Now that we started the game by clicking our first button the introductory text should be gone
  expect(
    screen.queryByText(
      'You are a brave knight who has been given a quest by the king. You must find the princess and save her from the evil dragon. You are riding through the fields.',
    ),
  ).not.toBeInTheDocument()

  // A "Back to the fields" button should be there
  screen.getByRole('button', { name: 'Back to the fields' })

  // Enter the castle by clicking the button
  const enterTheCastle = screen.getByRole('button', { name: 'Enter the castle' })
  await userEvent.click(enterTheCastle)

  screen.getByText(
    'As you are entering the castle, you hear a loud roar. And there, just in front of you, is the dragon!',
  )

  // Fight the dragon by clicking the button
  const fightTheDragon = screen.getByRole('button', { name: 'Fight the dragon' })
  await userEvent.click(fightTheDragon)

  // It's a hell of a fight!
  screen.getByText(
    'The dragon is spitting fire at you! But you manage to dodge it! And brave as you are, you fight back!',
  )

  // YES! You have defeated the dragon and won the game!
  screen.getByText(
    'And after a long battle, you have defeated the dragon! You have saved the princess! Congratulations!',
  )
})
