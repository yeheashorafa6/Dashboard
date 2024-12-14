import React from 'react'
import { GoSearch } from "react-icons/go";
import { AiOutlineMessage } from "react-icons/ai";

import { TfiAnnouncement } from "react-icons/tfi";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <div className='flex items-center justify-between p-4'>
      {/* SEARCH BAR */}
      <div className='hidden md:flex items-center gap-3 ring-[1.5px] ring-gray-300 text-sm px-4 rounded-full'>
        <GoSearch size={14} />
        <input type="text" placeholder="Search..." className='w-[200px] p-3 bg-transparent outline-none'/>
      </div>
      {/* ICON AND USER BAR */}
      <div className='flex items-center gap-6 justify-end w-full'>
        <div className=' rounded-full flex justify-center items-center cursor-pointer '>
          <AiOutlineMessage size={20}/>
        </div>
        <div className=' rounded-full flex justify-center items-center cursor-pointer relative'>
          <TfiAnnouncement size={20}/>
          <div className='absolute rounded-full w-5 h-5 -top-3 -right-3 flex items-center justify-center text-white text-xs bg-purple-500'>1</div>
        </div>
        <div className='flex flex-col'>
          <span className='text-sx leading-3 font-medium'>Yehea Shorafa</span>
          <span className='text-right text-[10px] text-gray-400'>Admin</span>
        </div>
        <FaUserCircle size={30}/>
      </div>
    </div>
  )
}

export default Navbar
