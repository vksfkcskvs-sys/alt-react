import React from 'react'

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault()
    console.log('submitted!');
  }

  return (
    <div onSubmit= {(e)=> {
      submitHandler(e);
    }}>
      <form>
        <input type="text" placeholder='enter your name'>
        </input>
        <button type='submit' >Submit</button>
      </form>
    </div>
  )
}

export default App