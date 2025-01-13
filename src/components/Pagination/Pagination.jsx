"use client"
import { ITEM_PER_PAGE } from '@/lib/setting'
import { useRouter } from 'next/navigation'
import React from 'react'

function Pagination({page , count}) {
  const router = useRouter()

  const hasPrev = ITEM_PER_PAGE * (page - 1) > 0
  const hasNext = ITEM_PER_PAGE * (page - 1) + ITEM_PER_PAGE < count


  const changePage = (newPage) =>{
    const params = new URLSearchParams(window.location.search)
    params.set("page" , newPage.toString())
    router.push(`${window.location.pathname}?${params}`)
  }
  return (
    <div className='p-2 flex justify-between items-center text-gray-500'>
      <button onClick={()=>changePage(page - 1)} disabled={!hasPrev} className='text-sm bg-slate-200 rounded-xl py-2 px-4 font-semibold disabled:opacity-50 disabled:cursor-not-allowed'>Prev</button>
      <div className='flex items-center gap-2 text-sm'>
        {
          Array.from({length : Math.ceil(count / ITEM_PER_PAGE)} , (_,index) =>{
            const pageIndex = index +1
            return(
              <button onClick={()=>changePage(pageIndex)} key={pageIndex} className={`p-2  rounded-md ${page === pageIndex ? "bg-sky" : ""}`}>{pageIndex}</button>
            )
          })
        }
      </div>
      <button onClick={()=>changePage(page + 1)} disabled={!hasNext} className='text-sm bg-slate-200 rounded-xl py-2 px-4 font-semibold disabled:opacity-50 disabled:cursor-not-allowed'>Next</button>
    </div>
  )
}

export default Pagination
