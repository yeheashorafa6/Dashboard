import React from 'react'
import { GiSettingsKnobs } from "react-icons/gi";
import { BsSortDown } from "react-icons/bs";
import TableSearch from '@/components/TableSearch/TableSearch';
import Pagination from '@/components/Pagination/Pagination';
import Table from '@/components/Table/Table';
import Image from 'next/image';
import Link from 'next/link';
import { role } from '@/lib/data';
import FormModal from '@/components/FormModal/FormModal';
import { PiEyeLight } from 'react-icons/pi';
import { prisma } from "@/lib/prisma";
import { ITEM_PER_PAGE } from "@/lib/setting";

 const columns = [
  {
    header : "Info",
    accessor : "info"
  },
  {
    header : "Student ID",
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



  const renderRow = (item)=>(
    <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-skyight'>
      <td className='flex items-center gap-4 p-4'>
        <Image src={item.img || "/noavatar.png"} alt='' width={40} height={40} className='w-10 h-10 rounded-full md:hidden xl:block object-cover'/>
        <div className='flex flex-col'>
          <h2 className='font-semibold'>{item.name}</h2>
          <p className='text-xs text-gray-500'>{item?.class.name}</p>
        </div>
      </td>
      <td className='hidden md:table-cell'>{item.username}</td>
      <td className='hidden md:table-cell'>{item.class.name[0]}</td>
      <td className='hidden md:table-cell'>{item.phone}</td>
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
            // <button className='w-8 h-8 flex items-center justify-center rounded-full bg-primaryPurple'>
            //   <AiOutlineDelete size={17} className='text-red-600'/>
            // </button>
            <FormModal table={"student"} type={"delete"} id={item.id}/>
          }
        </div>
      </td>

    </tr>
  )
  
async function StudentsListPage({searchParams}) {
  const {page , ...queryParams} = searchParams;
  const p = page ? parseInt(page) :  1;
  const query = {};

  if(queryParams){
    for(const [key, value] of Object.entries(queryParams)){
      if(value !== undefined){
        switch(key){
          case "teacherId" : 
          query.class = {
            lessons : {
              some:{
                teacherId : value,
              },
            },
          }
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
    prisma.student.findMany({
      where:query,
     include : {
       class : true
     },
     take : ITEM_PER_PAGE,
     skip : (p - 1) * ITEM_PER_PAGE, 
   }),
   prisma.student.count({
    where: query
  })

  ])
  console.log(data)
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
            // <button className=' rounded-full flex justify-center items-center cursor-pointer bg-secondaryYellow p-2 text-black'>
            //   <GoPlus size={17}/>
            // </button>
            <FormModal table={"student"} type={"create"}/>
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

export default StudentsListPage
