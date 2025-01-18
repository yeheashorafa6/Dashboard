import Announcements from '@/components/Announcements/Announcements'
import BigCalender from '@/components/BigCalender/BigCalender'
import React from 'react'

function ParentPage() {
  return (
    <div className='flex-1 flex flex-col xl:flex-row gap-4 p-4'>
      {/* LEFT */}
      <div className='w-full xl:w-2/3'>
        <div className='h-full bg-white p-4 rounded-lg'>
          <h1 className='text-xl font-semibold'>Schedule (Yehea Shorafa)</h1>
          <BigCalender/>
        </div>
      </div>
      {/* RIGHT */}
      <div className='w-full xl:w-1/3 flex flex-col gap-8'>
          {/* ANNOUNCEMENTS */}
          <Announcements/>
      </div>
    </div>
  )
}

export default ParentPage
