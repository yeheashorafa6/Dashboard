import React from 'react'
import { GiSettingsKnobs } from "react-icons/gi";
import { BsSortDown } from "react-icons/bs";
import TableSearch from '@/components/TableSearch/TableSearch';
import Pagination from '@/components/Pagination/Pagination';
import Table from '@/components/Table/Table';
import { classesData, role } from '@/lib/data';
import FormModal from '@/components/FormModal/FormModal';
import {prisma} from '@/lib/prisma';
import { ITEM_PER_PAGE } from '@/lib/setting';


 const columns = [
  {
    header : "Class Name",
    accessor : "name",
  },
  {
    header : "Capacity",
    accessor : "capacity",
    className : "hidden md:table-cell"
  },
  {
    header : "Grade",
    accessor : "grade",
    className : "hidden md:table-cell"
  },
  {
    header : "Supervisor",
    accessor : "supervisor",
    className : "hidden md:table-cell"
  },
  {
    header : "Actions",
    accessor : "actions",
  },
]


const renderRow = (item)=>(
  <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-skyight'>
    <td className='flex items-center p-4'>
        <h2 className=''>{item.name}</h2>
    </td>
    <td className='hidden md:table-cell'>{item.capacity}</td>
    <td className='hidden md:table-cell'>{item.gradeId}</td>
    <td className='hidden md:table-cell'>{item.supervisor.name + " " + item.supervisor.surname}</td>

    <td>
      <div className='flex items-center gap-2'>
      { role === "admin" &&
        <>
          <FormModal table={"class"} type={"update"} data={item}/>
          <FormModal table={"class"} type={"delete"} id={item.id}/>
        </>
        }
      </div>
    </td>

  </tr>
)

async function ClassesListPage({searchParams}) {
  const {page , ...queryParams} = searchParams;
  const p = page ? parseInt(page) :  1;
  const query = {};

  if(queryParams){
    for(const [key, value] of Object.entries(queryParams)){
      if(value !== undefined){
        switch(key){
          case "supervisorId" :
            query.supervisorId = value
            break;
          case "search" :
            const lowerCaseValue = value.toLowerCase();
            query.name = { contains: lowerCaseValue };
            break;
            default : 
            break;
        }
      }
    }
  }
  const [data , count ] = await prisma.$transaction([
    prisma.class.findMany({
      where:query,
     include : {
      supervisor : true,
     },
     take : ITEM_PER_PAGE,
     skip : (p - 1) * ITEM_PER_PAGE, 
   }),
   prisma.class.count({
    where: query
  })

  ])
  console.log(data)

  return (
    <div className='bg-white rounded-md p-4 m-4 mt-2 '>
      {/* TOP */ }
      <div className='flex justify-between items-center'>
        <h1 className='hidden md:block  text-lg font-semibold'>All Classes</h1>
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
              <FormModal table={"class"} type={"create"} />
            }
          </div>
        </div>
      </div>
      {/* LIST */}
      <div>
        <Table columns={columns} renderRow={renderRow} data={data}/>
      </div>
      {/* PAGINATION */}
      <div>
        <Pagination page={p} count={count}/>
      </div>
    </div>
  )
}

export default ClassesListPage
