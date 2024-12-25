import React from 'react'
import { GoSearch } from 'react-icons/go'

function TableSearch() {
  return (
    <div className='w-full md:w-auto flex m-3 items-center gap-3 ring-[1px] ring-black text-sm px-4 rounded-full'>
        <GoSearch size={14} />
        <input type="text" placeholder="Search..." className='w-full p-2 bg-transparent outline-none'/>
    </div>
  )
}

export default TableSearch
