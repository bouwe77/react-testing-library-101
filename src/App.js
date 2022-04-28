function App() {
  return (
    <>
      <h1>My Adventure Game</h1>

      <p>
        You are a brave knight who has been given a quest by the king. You must find the princess and save her from the
        evil dragon.
      </p>

      <p>
        You are riding through the fields. In the distance, to the north, a castle appears. To the east is the forest.
      </p>

      <div>
        <Button>Go north</Button>
        <Button>Go east</Button>
      </div>
    </>
  )
}

function Button({ children, ...rest }) {
  return (
    <button style={{ margin: '10px 20px 0px 0px' }} {...rest}>
      {children}
    </button>
  )
}

export default App
