import React from 'react'
import { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('submitted by ' + title);
    setTitle('')
  }

  return (
    <div onSubmit= {(e)=> {
      submitHandler(e);
    }}>
      <form>
        <input type="text" placeholder='enter your name'
        value={title}
        onChange={(e)=> {
          setTitle(e.target.value);
        }}
        >
        </input>
        <button type='submit' >Submit</button>
      </form>
    </div>
  )
}

export default App