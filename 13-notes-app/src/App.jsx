import React from 'react'
import { useState } from 'react';
import { X } from 'lucide-react';

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task];
    copyTask.push({ title, details })

    setTask(copyTask)
    console.log(copyTask);
    setTitle('')
    setDetails('')
  }


  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex gap-4 lg:w-1/2 flex-col items-start p-10'>

        <h1 className='text-4xl font-bold'>Add Notes</h1>

        {/* PEHLA INPUT */}
        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        {/* DETAILED WALA INPUT */}
        <textarea
          type="text"
          className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none rounded'
          placeholder='Write Details'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />

        <button className='bg-white font-medium w-full active:bg-gray-400 active:scale-95 text-black px-5 py-2 outline-none rounded'>Add Note</button>

      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-auto'>
          {task.map(function (elem, idx) {
            return <div key={idx} className="relative h-52 w-40 bg-cover rounded-xl py-9 px-4 text-black bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <h2><X /></h2>
              <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
              <p className='mt-3 leading-tight font-medium text-gray-500'>{elem.details}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App