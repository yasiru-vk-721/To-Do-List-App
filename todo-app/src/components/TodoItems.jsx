import React from 'react'
import Tick from "../assets/tick.png"
// import NotTick from "../not_tick.png"
import Delete from "../assets/delete.png"


const TodoItems = ({prop}) => {
  if(!prop){
    return null;
  }
  return (
    <div className='flex items-center my-3 gap-2'>
        <div className='flex flex-1 items-center cursor-pointer'>
            <img src={Tick} className='w-7'/>
            <p className='text-slate-700 ml-4 text-[17px]'>{prop}</p>
        </div>
        <img src={Delete} className='w-4 cursor-pointer'/>
    </div>
  )
}

export default TodoItems