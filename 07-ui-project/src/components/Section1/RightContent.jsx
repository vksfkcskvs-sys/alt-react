import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props);
  
  return (
    <div className='h-full flex overflow-x-auto flex-nowrap rounded-4xl gap-10 w-2/3 p-6 '>
      <RightCard />
      <RightCard />
      <RightCard />
    </div>
  )
}

export default RightContent