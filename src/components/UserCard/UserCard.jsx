import React from 'react'
import { MdOutlineMoreHoriz } from "react-icons/md";

function UserCard({type,date,userCount}) {
  return (
    <div className='odd:bg-primaryPurple even:bg-secondaryYellow rounded-3xl p-4 min-w-[130px]  flex-1'>
      <div className='flex justify-between'>
        <span className='bg-white px-2 py-1 rounded-full text-[10px] flex items-center text-teal-600 font-medium'>{date}</span>
        <MdOutlineMoreHoriz size={27} className='text-white'/>
      </div>
      <h1 className='font-medium text-xl my-4'>{userCount}</h1>
      <h1 className='uppercase text-sm text-teal-600 font-medium'>{type}</h1>
    </div>
  )
}

export default UserCard
