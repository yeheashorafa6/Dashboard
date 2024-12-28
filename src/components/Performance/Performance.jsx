"use client";
import React, { PureComponent } from "react";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 92 , fill : "#C3EBFA" },
  { name: "Group B", value: 8 , fill : "#FAE27C"},
];

function Performance () {
  return (
      <div className="h-full bg-white p-4 rounded-lg relative">
         {/* <div className="flex items-center justify-between my-4">
           <h1 className="text-xl font-semibold">Performance</h1>
           <MdOutlineMoreHoriz size={27} className='cursor-pointer'/>
         </div> */}
        <ResponsiveContainer width="100%" height={260}> 
          <PieChart>
            <Pie
              dataKey="value"
              startAngle={180}
              endAngle={0}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              fill="#8884d8"
              isAnimationActive={true}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-3xl font-bold">9.2</h1>
          <p className="text-xs text-gray-400">of 10 max LTS</p>
        </div>
        <h2 className="font-medium absolute bottom-20 left-0 right-0 m-auto text-center">1st Semester - 2nd Semester</h2>
      </div> 
  );
}

export default Performance;
