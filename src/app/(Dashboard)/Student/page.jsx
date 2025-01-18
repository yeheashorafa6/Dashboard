import Announcements from '@/components/Announcements/Announcements'
import BigCalender from '@/components/BigCalender/BigCalender'
import EventCalender from '@/components/EventCalender/EventCalender'
import React from 'react'

function StudentPage() {
  return (
    <div className='flex flex-col xl:flex-row gap-4 p-4'>
      {/* LEFT */}
      <div className='w-full xl:w-2/3'>
        <div className='h-full bg-white p-4 rounded-lg'>
          <h1 className='text-xl font-semibold'>Schedule (4A)</h1>
          <BigCalender/>
        </div>
      </div>
      {/* RIGHT */}
      <div className='w-full xl:w-1/3 flex flex-col gap-8'>
          {/* EVENTS CALENDER */}
          <EventCalender/>
          {/* ANNOUNCEMENTS */}
          <Announcements/>
      </div>
    </div>
  )
}

export default StudentPage
