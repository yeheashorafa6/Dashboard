"use client"
import React from 'react'
import { MdOutlineMoreHoriz } from 'react-icons/md'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Sat',
    present: 60,
    absent: 40,
  },
  {
    name: 'Sun',
    present: 70,
    absent: 50,
  },
  {
    name: 'Mon',
    present: 80,
    absent: 30,
  },
  {
    name: 'Tue',
    present: 100,
    absent: 20,
  },
  {
    name: 'Wen',
    present: 50,
    absent: 70,
  },
  {
    name: 'Thur',
    present: 120,
    absent: 50,
  },
  {
    name: 'Fri',
    present: 150,
    absent: 40,
  },
];
function AttendaceChart() {
  return (
    <div className='bg-white p-4 h-full w-full rounded-3xl'>
        {/* TITLE */}
        <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold">Attendace</h1>
            <MdOutlineMoreHoriz size={27} className='cursor-pointer'/>
        </div>
        <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
          <XAxis dataKey="name" axisLine={false} tick={{fill : "teal"}} tickLine={false} />
          <YAxis axisLine={false} tick={{fill : "teal"}} tickLine={false}/>
          <Tooltip contentStyle={{borderRadius:"15px" , borderColor : "transparent"}}/>
          <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop : "20px" , paddingBottom : "40px"}}/>
          <Bar radius={[10,10,0,0]}  legendType='circle' dataKey="present" fill="#FAE27C" activeBar={<Rectangle fill="#eace50" />} />
          <Bar radius={[10,10,0,0]} legendType='circle' dataKey="absent" fill="#C3EBFA" activeBar={<Rectangle fill="#86bdd0"  />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AttendaceChart
