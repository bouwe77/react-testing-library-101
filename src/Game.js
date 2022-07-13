import { useState } from 'react'
import Button from './Button'

const story = {
  field: {
    texts: ['There, in the distance, you can see a castle.', 'On your right is the forest.'],
    directions: { 'Go to the castle': 'castle', 'Head into the forest': 'forest' },
  },
  castle: {
    texts: ['You are standing in front of the castle. The drawbridge is open.'],
    directions: { 'Back to the fields': 'field', 'Enter the castle': 'insideCastle' },
  },
  forest: {
    texts: ["You arrive at the forest. It's so peaceful and quiet here with all the birds singing."],
    directions: { 'Leave the forest': 'field' },
  },
  insideCastle: {
    texts: ['As you are entering the castle, you hear a loud roar. And there, just in front of you, is the dragon!'],
    directions: { 'Flee!': 'castle', 'Fight the dragon': 'fight' },
  },
  fight: {
    texts: [
      'The dragon is spitting fire at you! But you manage to dodge it! And brave as you are, you fight back!',
      'And after a long battle, you have defeated the dragon! You have saved the princess! Congratulations!',
    ],
  },
}

function Game() {
  const [location, setLocation] = useState('field')
  const [gameStarted, setGameStarted] = useState(false)

  const goTo = (newLocation) => {
    setLocation(newLocation)
    if (!gameStarted) setGameStarted(true)
  }

  return (
    <>
      <h1>My Adventure Game</h1>

      {!gameStarted ? (
        <p>
          You are a brave knight who has been given a quest by the king. You must find the princess and save her from
          the evil dragon. You are riding through the fields.
        </p>
      ) : null}

      {story[location].texts.map((line, index) => (
        <p key={index}>{line}</p>
      ))}

      <div>
        {Object.keys(story[location].directions ?? {}).map((direction) => (
          <Button key={direction} onClick={() => goTo(story[location].directions[direction])}>
            {direction}
          </Button>
        ))}
      </div>
    </>
  )
}

export default Game
