"use client"
import React, { useState } from 'react'
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css"; // تأكد من استيراد ملف CSS لتنسيق التقويم
import { MdOutlineMoreHoriz } from 'react-icons/md';
// TEMPRORA DATA
const events = [
  {
  
  id: 1,
  title: "Lorem ipsum dolor",
  time: "12:00 PM - 2:00 PM",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  
  }
  ,{
  
  id: 2,
  title: "Lorem ipsum dolor",
  time: "12:00 PM - 2:00 PM",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  
  },
  {
  
  id: 3,
  title: "Lorem ipsum dolor",
  time: "12:00 PM - 2:00 PM",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  }
]
function EventCalender() {
    const [date, setDate] = useState(new Date());

    const handleDateChange = (newDate) => {
      setDate(newDate);
    };
  
    return (
      <div className='bg-white p-4 rounded-md'>
        <Calendar onChange={handleDateChange} value={date} />
        {/* TITLE */}
        <div className="flex items-center justify-between my-4">
            <h1 className="text-lg font-semibold">Events</h1>
            <MdOutlineMoreHoriz size={27} className='cursor-pointer'/>
        </div>
        <div className='flex flex-col gap-4'>
            {events.map(event => (
                <div key={event.id} className='border-2 border-gray-200 p-5 rounded-md odd:border-t-sky even:border-t-primaryPurple'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-lg font-bold text-secondaryYellow'>{event.title}</h2>
                        <span className='text-gray-600 text-sm'>{event.time}</span>
                    </div>
                    <p className='my-2 text-[16px] text-gray-500'>{event.description}</p>
                </div>
            ))}
        </div>
      </div>
    );
  };

export default EventCalender
