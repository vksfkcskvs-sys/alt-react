import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)

  function increaseNum() {
    setNum(num + 1)
  }
  function decreaseNum() {
    setNum(num - 1)
  }
  function jumpBy7() {
    setNum(num + 7)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={jumpBy7}>Jump by 7</button>
    </div>
  )
}

export default App