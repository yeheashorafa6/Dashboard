"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { GoSearch } from 'react-icons/go'

function TableSearch() {

  const router = useRouter();
  
  const handleSubmit = (e) =>{
    e.preventDefault();

    const value = e.currentTarget[0].value
    const params = new URLSearchParams(window.location.search)
    params.set("search" , value)
    router.push(`${window.location.pathname}?${params}`)
  }
  return (
    <form onChange={handleSubmit} className='w-full md:w-auto flex m-3 items-center gap-3 ring-[1px] ring-black text-sm px-4 rounded-full'>
        <GoSearch size={14} />
        <input type="text" placeholder="Search..." className='w-full p-2 bg-transparent outline-none'/>
    </form>
  )
}

export default TableSearch
