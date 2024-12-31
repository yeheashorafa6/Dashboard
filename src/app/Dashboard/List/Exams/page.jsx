import React from 'react'
import { GoPlus} from 'react-icons/go'
import { GiSettingsKnobs } from "react-icons/gi";
import { BsSortDown } from "react-icons/bs";
import TableSearch from '@/components/TableSearch/TableSearch';
import Pagination from '@/components/Pagination/Pagination';
import Table from '@/components/Table/Table';
import Link from 'next/link';
import { AiOutlineDelete } from "react-icons/ai";
import { examsData, role } from '@/lib/data';
import { FiEdit } from "react-icons/fi";
import FormModal from '@/components/FormModal/FormModal';

const data = [
 {
  id : Number, 
  subject : String,
  class : String,
  teacher : String,
  date : String,
 }
]

 const columns = [
  {
    header : "Subject Name",
    accessor : "subject",
  },
  {
    header : "Class",
    accessor : "class",
  },
  {
    header : "Teacher",
    accessor : "teacher",
    className : "hidden md:table-cell"
  },
  {
    header : "Date",
    accessor : "date",
    className : "hidden md:table-cell"
  },
  {
    header : "Actions",
    accessor : "actions",
  },
]


function ExamsListPage() {

  const renderRow = (item)=>(
    <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-skyight'>
      <td className='flex items-center p-4'>
          <h2 className=''>{item.subject}</h2>
      </td>
      <td className='hidden md:table-cell'>{item.class}</td>
      <td className='hidden md:table-cell'>{item.teacher}</td>
      <td className='hidden md:table-cell'>{item.date}</td>
      <td>
        <div className='flex items-center gap-2'>
        { role === "admin" &&
          <>
            <FormModal table={"exam"} type={"update"} data={item}/>
            <FormModal table={"exam"} type={"delete"} id={item.id}/>
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
        <h1 className='hidden md:block  text-lg font-semibold'>All Exams</h1>
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
              <FormModal table={"exam"} type={"create"}/>
            }
          </div>
        </div>
      </div>
      {/* LIST */}
      <div>
        <Table columns={columns} renderRow={renderRow} data={examsData}/>
      </div>
      {/* PAGINATION */}
      <div>
        <Pagination/>
      </div>
    </div>
  )
}

export default ExamsListPage
