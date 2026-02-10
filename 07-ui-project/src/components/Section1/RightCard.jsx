import React from 'react'
import { ArrowRight } from 'lucide-react'

const RightCard = () => {
  return (
    <div className='h-full overflow-hidden relative w-80 rounded-4xl'>
      <img className='h-full w-full object-cover rounded-4xl' src="https://images.unsplash.com/photo-1770319125029-c4c15ec8523d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <div className='absolute top-0 bottom-0 w-full h-full  p-8 flex flex-col justify-between'>
        <h2 className='bg-white text-2xl font-semibold rounded-full h-14 w-14 flex justify-center items-center'>1</h2>
        <div>
          <p className='text-xl leading-normal text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quibusdam ipsa earum mollitia omnis in.</p>
          <div className='flex justify-between'>
            <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full'>
              Satisfied
            </button>
             <button className='bg-blue-600 text-white font-medium px-3 py-2 rounded-full'>
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightCard