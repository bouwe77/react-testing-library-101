function Button({ children, ...rest }) {
  return (
    <button style={{ margin: '10px 20px 0px 0px' }} {...rest}>
      {children}
    </button>
  )
}

export default Button
