import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = () => {
  return (
    <div className='h-full overflow-hidden relative w-80 rounded-4xl'>
      <img className='h-full w-full object-cover rounded-4xl' src="https://images.unsplash.com/photo-1770319125029-c4c15ec8523d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <RightCardContent />
    </div>
  )
}

export default RightCard