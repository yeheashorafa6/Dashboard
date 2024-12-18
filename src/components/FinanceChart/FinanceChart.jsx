"use client"
import React from 'react'
import { MdOutlineMoreHoriz } from 'react-icons/md'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'Feb',
    income: 3000,
    expense: 1398,
  },
  {
    name: 'Mar',
    income: 2000,
    expense: 9800,
  },
  {
    name: 'Apr',
    income: 2780,
    expense: 3908,
  },
  {
    name: 'May',
    income: 1890,
    expense: 4800,
  },
  {
    name: 'Jun',
    income: 2390,
    expense: 3800,
  },
  {
    name: 'Jul',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Aug',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Sep',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Oct',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Nov',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Des',
    income: 3490,
    expense: 4300,
  },
];

function FinanceChart() {
  return (
   <div className="w-full h-full bg-white rounded-3xl p-4">
      {/* TITLE */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Finance</h1>
        <MdOutlineMoreHoriz size={27} className='cursor-pointer'/>
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
          <XAxis dataKey="name" axisLine={false} tick={{fill : "teal"}} tickLine={false} tickMargin={10}/>
          <YAxis axisLine={false} tick={{fill : "teal"}} tickLine={false} tickMargin={20}/>
          <Tooltip />
          <Legend align='center' verticalAlign='top' wrapperStyle={{paddingTop : "10px" , paddingBottom : "30px"}}/>
          <Line type="monotone" dataKey="income" stroke="#597b87" activeDot={{ r: 8 }} strokeWidth={3}/>
          <Line type="monotone" dataKey="expense" stroke="#b99f2c" strokeWidth={2}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default FinanceChart
