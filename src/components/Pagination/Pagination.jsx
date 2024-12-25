import React from 'react'

function Pagination() {
  return (
    <div className='p-2 flex justify-between items-center text-gray-500'>
      <button disabled className='text-sm bg-slate-200 rounded-xl py-2 px-4 font-semibold disabled:opacity-50 disabled:cursor-not-allowed'>Prev</button>
      <div className='flex items-center gap-2 text-sm'>
        <button className='p-2 bg-sky rounded-md'>1</button>
        <button className='p-2 rounded-md'>2</button>
        ...
        <button className='p-2 rounded-md'>10</button>
      </div>
      <button className='text-sm bg-slate-200 rounded-xl py-2 px-4 font-semibold disabled:opacity-50 disabled:cursor-not-allowed'>Next</button>
    </div>
  )
}

export default Pagination
