import React from 'react'
import { GoPlus} from 'react-icons/go'
import { GiSettingsKnobs } from "react-icons/gi";
import { BsSortDown } from "react-icons/bs";
import TableSearch from '@/components/TableSearch/TableSearch';
import Pagination from '@/components/Pagination/Pagination';
import Table from '@/components/Table/Table';
import Link from 'next/link';
import { AiOutlineDelete } from "react-icons/ai";
import { parentsData, role } from '@/lib/data';
import { FiEdit } from 'react-icons/fi';
import FormModal from '@/components/FormModal/FormModal';

const data = [
 {
  id : Number, 
  name : String,
  email :String ,
  students : String,
  phone : String,
  address : String,
 }
]

 const columns = [
  {
    header : "Info",
    accessor : "info"
  },
  {
    header : "Student Name",
    accessor : "students",
    className : "hidden md:table-cell"
  },
  {
    header : "Phone",
    accessor : "subjects",
    className : "hidden md:table-cell"
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


function ParentListPage() {

  const renderRow = (item)=>(
    <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-skyight'>
      <td className='flex items-center gap-4 p-4'>
        <div className='flex flex-col'>
          <h2 className='font-semibold'>{item.name}</h2>
          <p className='text-xs text-gray-500'>{item?.email}</p>
        </div>
      </td>
      <td className='hidden md:table-cell'>
          {Array.isArray(item.students) ? item.students.join(", ") : item.students || "N/A"}
      </td>
      <td className='hidden md:table-cell'>{item.phone}</td>
      <td className='hidden md:table-cell'>{item.address}</td>
      <td>
      <div className='flex items-center gap-2'>
          { role === "admin" &&
          <>
            <FormModal table={"parent"} type={"update"} data={item}/>
            <FormModal table={"parent"} type={"delete"} id={item.id}/>
          </>
          }
        </div>
      </td>

    </tr>
  )
  return (
    <div className='bg-white rounded-md p-4 m-4 mt-2 '>
      {/* TOP */ }
      <div className='flex justify-between items-center'>
        <h1 className='hidden md:block  text-lg font-semibold'>All Parents</h1>
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
            {
              role === "admin" &&
              <FormModal table={"parent"} type={"create"}/>
             }
          </div>
        </div>
      </div>
      {/* LIST */}
      <div>
        <Table columns={columns} renderRow={renderRow} data={parentsData}/>
      </div>
      {/* PAGINATION */}
      <div>
        <Pagination/>
      </div>
    </div>
  )
}

export default ParentListPage
