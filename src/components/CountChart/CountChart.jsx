"use client";
import React, { PureComponent } from "react";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { FaMale ,FaFemale } from "react-icons/fa";

import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 95,
    fill: "white",
  },
  {
    name: "Girls",
    count: 45,
    fill: "#FAE27C",
  },
  {
    name: "Boys",
    count: 55,
    fill: "#C3EBFA",
  },
 
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};
function CountChart() {
  return (
    <div className="w-full h-full bg-white rounded-3xl p-4">
      {/* TITLE */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Students</h1>
        <MdOutlineMoreHoriz size={27} className='cursor-pointer'/>
      </div>
      {/* CHARTS */}
      <div className="w-full h-[75%] relative">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar
              background
              dataKey="count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="absolute flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <FaMale size={50} className="text-sky"/>
          <FaFemale size={50} className="text-secondaryYellow"/>
        </div>
      </div>

      {/* BOOTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 rounded-full bg-sky"/>
          <h1 className="font-bold text-gray-800">1100</h1>
          <h2 className="text-sm text-gray-500">Boys (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 rounded-full bg-secondaryYellow"/>
          <h1 className="font-bold text-gray-800">900</h1>
          <h2 className="text-sm text-gray-500">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
}

export default CountChart;
