import React from 'react'

// TEMPRORA DATA
const Announ = [
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
function Announcements() {
  return (
    <div className="w-full h-full bg-white p-4">
      {/* TITLE */}
      <div className="flex items-center justify-between my-4">
        <h1 className="text-lg font-semibold">Announcements</h1>
        <span className='cursor-pointer text-xs text-gray-500'>View All</span>
      </div>
      <div className='flex flex-col gap-4 '>
            {Announ.map(item => (
                <div key={item.id} className='border-2 border-gray-200 p-5 rounded-2xl odd:bg-sky even:bg-primaryPurple'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-lg font-bold text-[#b99f2c]'>{item.title}</h2>
                        <span className='text-[#597b87] text-xs bg-white rounded-full p-2'>{item.time}</span>
                    </div>
                    <p className='my-2 text-[16px] odd:text-gray-600 even:text-gray-500'>{item.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Announcements
