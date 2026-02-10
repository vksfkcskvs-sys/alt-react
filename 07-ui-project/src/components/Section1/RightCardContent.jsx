import React from 'react'
import { ArrowRight } from 'lucide-react'

const RightCardContent = () => {
  return (
    <div className='absolute top-0 bottom-0 w-full h-full  p-8 flex flex-col justify-between'>
      <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>1</h2>
      <div>
        <p className='text-xl leading-relaxed text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quibusdam ipsa earum mollitia omnis in.</p>
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
  )
}

export default RightCardContent