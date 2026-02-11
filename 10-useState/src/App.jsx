import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num, setNum] = useState([1, 2, 3, 4, 5])
  const btnClicked = () => {
     const newNum = [...num];
     newNum.push(99);
     console.log(newNum);
     setNum(newNum);
  }


  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App