import React from 'react'
import { useState } from 'react'

const App = () => {

  const [a, setA] = useState()

  return (
    <div>
      <h1>Value of a is {a}</h1>
      <button>Click</button>
    </div>
  )
}

export default App