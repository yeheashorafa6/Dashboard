import Announcements from '@/components/Announcements/Announcements'
import EventCalender from '@/components/EventCalender/EventCalender'
import React from 'react'

function StudentsPage() {
  return (
    <div className='flex flex-col xl:flex-row gap-4 p-4'>
      {/* LEFT */}
      <div className='w-full xl:w-2/3'>
        <div className='h-full bg-white p-4 rounded-lg'>
          
        </div>
      </div>
      {/* RIGHT */}
      <div className='w-full xl:w-1/3 flex flex-col gap-8'>
          {/* EVWNTS CALENDER */}
          <EventCalender/>
          {/* ANNOUNCEMENTS */}
          <Announcements/>
      </div>
    </div>
  )
}

export default StudentsPage
