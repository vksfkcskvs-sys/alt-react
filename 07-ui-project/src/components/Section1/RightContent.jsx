import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props.users);
  
  return (
    <div id='right' className='h-full flex overflow-x-auto flex-nowrap rounded-4xl gap-10 w-2/3 p-6 '>
      {props.users.map(function(elem, idx) {
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} />
      })}
    </div>
  )
}

export default RightContent