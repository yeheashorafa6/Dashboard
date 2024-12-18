
import Announcements from '@/components/Announcements/Announcements';
import AttendaceChart from '@/components/AttendaceChart/AttendaceChart';
import CountChart from '@/components/CountChart/CountChart';
import EventCalender from '@/components/EventCalender/EventCalender';
import FinanceChart from '@/components/FinanceChart/FinanceChart';
import UserCard from '@/components/UserCard/UserCard'
import React from 'react'

const users = [
  { id: 1, date: "16/12/2024", userCount : 1500, type: "student" },
  { id: 2, date: "10/12/2024", userCount : 2200, type: "teacher" },
  { id: 3, date: "15/12/2024", userCount : 1800, type: "parent" },
  { id: 4, date: "11/12/2024", userCount : 500, type: "staff" },
];

function AdminPage() {
  return (
    <div className='flex flex-col md:flex-row gap-4 p-4'>
      {/* LEFT */}
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
        {/* USER CARDS */}
        <div className='flex justify-between flex-wrap gap-4'>
          {users.map((user) => (
            <UserCard key={user.id} type={user.type} userCount={user.userCount} date={user.date} />
          ))}
        </div>
         {/* CHARTS */}
        <div className='flex justify-between flex-col lg:flex-row gap-4'>
         {/* COUNT CHARTS */}
         <div className='w-full lg:w-1/3 h-[450px]'>
          <CountChart/>
         </div>
         {/* ATTENDACE CARTS */}
         <div className='w-full lg:w-2/3 h-[450px]'>
          <AttendaceChart/>
         </div>
        </div>
        {/* BOTTOM CHARTS */}
        <div className='w-full h-[500px]'>
          <FinanceChart/>
        </div>
      </div>
     
      {/* RIGHT */}
      <div className='w-full lg:w-1/3 flex flex-col gap-8'>
        {/* EVWNTS CALENDER */}
        <EventCalender/>
        {/* ANNOUNCEMENTS */}
        <Announcements/>
      </div>
    
    </div>
  )
}

export default AdminPage
