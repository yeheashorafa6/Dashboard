import React from 'react'
import { GoPlus} from 'react-icons/go'
import { GiSettingsKnobs } from "react-icons/gi";
import { BsSortDown } from "react-icons/bs";
import TableSearch from '@/components/TableSearch/TableSearch';
import Pagination from '@/components/Pagination/Pagination';
import Table from '@/components/Table/Table';
import Image from 'next/image';
import Link from 'next/link';
import { PiEyeLight } from "react-icons/pi";
import { AiOutlineDelete } from "react-icons/ai";
import { role, studentsData } from '@/lib/data';

const data = [
 {
  id : Number, 
  studentId : String ,
  name : String,
  email : String,
  photo : String,
  phone : String,
  grade : String,
  class :String ,
  address : String,
 }
]

 const columns = [
  {
    header : "Info",
    accessor : "info"
  },
  {
    header : "Teacher ID",
    accessor : "TeacherId",
    className : "hidden md:table-cell"
  },
  {
    header : "Grade",
    accessor : "grade",
    className : "hidden md:table-cell"
  },
  {
    header : "Phone",
    accessor : "phone",
    className : "hidden lg:table-cell"
  },
  {
    header : "Address",
    accessor : "address",
    className : "hidden lg:table-cell"
  },
  {
    header : "Actions",
    accessor : "actions",
  },
]


function StudentsListPage() {

  const renderRow = (item)=>(
    <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-skyight'>
      <td className='flex items-center gap-4 p-4'>
        <Image src={item.photo} alt='' width={40} height={40} className='w-10 h-10 rounded-full md:hidden xl:block object-cover'/>
        <div className='flex flex-col'>
          <h2 className='font-semibold'>{item.name}</h2>
          <p className='text-xs text-gray-500'>{item?.class}</p>
        </div>
      </td>
      <td className='hidden md:table-cell'>{item.studentId}</td>
      <td className='hidden md:table-cell'>{item.phone}</td>
      <td className='hidden md:table-cell'>{item.grade}</td>
      {/* <td className='hidden md:table-cell'>
      {Array.isArray(item.classes) ? item.classes.join(", ") : item.classes || "N/A"}
      </td> */}
      <td className='hidden md:table-cell'>{item.address}</td>
      <td>
        <div className='flex items-center gap-2'>
          <Link href={`Students/${item.id}`}>
            <button className='w-8 h-8 flex items-center justify-center rounded-full bg-sky'>
              <PiEyeLight size={17} className='text-emerald-800 '/>
            </button>
          </Link>
          { role === "admin" &&
            <button className='w-8 h-8 flex items-center justify-center rounded-full bg-primaryPurple'>
              <AiOutlineDelete size={17} className='text-red-600'/>
            </button>
          }
        </div>
      </td>

    </tr>
  )
  return (
    <div className='bg-white rounded-md p-4 m-4 mt-2 '>
      {/* TOP */ }
      <div className='flex justify-between items-center'>
        <h1 className='hidden md:block  text-lg font-semibold'>All Students</h1>
        <div className='flex flex-col md:flex-row items-center justify-center gap-3 w-full md:w-auto'>
          {/* SEARCH BAR */}
          <TableSearch/>
          {/* ICON BAR */}
          <div className='flex items-center gap-3 justify-end'>
            <button className=' rounded-full w-8 h-8 flex justify-center items-center cursor-pointer bg-secondaryYellow p-2 text-black'>
              <GiSettingsKnobs size={17}/>
            </button>
            <button className=' rounded-full flex justify-center items-center cursor-pointer bg-secondaryYellow p-2 text-black'>
              <BsSortDown size={17}/>
            </button>
            { role === "admin" && 
            <button className=' rounded-full flex justify-center items-center cursor-pointer bg-secondaryYellow p-2 text-black'>
              <GoPlus size={17}/>
            </button>}
          </div>
        </div>
      </div>
      {/* LIST */}
      <div>
        <Table columns={columns} renderRow={renderRow} data={studentsData}/>
      </div>
      {/* PAGINATION */}
      <div>
        <Pagination/>
      </div>
    </div>
  )
}

export default StudentsListPage
