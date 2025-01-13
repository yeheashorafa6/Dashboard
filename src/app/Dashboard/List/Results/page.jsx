import React from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { BsSortDown } from "react-icons/bs";
import TableSearch from "@/components/TableSearch/TableSearch";
import Pagination from "@/components/Pagination/Pagination";
import Table from "@/components/Table/Table";
import { role } from "@/lib/data";
import FormModal from "@/components/FormModal/FormModal";
import { ITEM_PER_PAGE } from "@/lib/setting";
import { prisma } from "@/lib/prisma";

const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Student",
    accessor: "student",
  },
  {
    header: "Score",
    accessor: "score",
    className: "hidden md:table-cell",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const renderRow = (item) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-skyight"
  >
    <td className="flex items-center p-4">
      <h2 className="">{item.title}</h2>
    </td>
    <td>{item.studentName}</td>
    <td className="hidden md:table-cell">{item.score}</td>
    <td className="hidden md:table-cell">{item.teacherName}</td>
    <td className="hidden md:table-cell">{item.className}</td>
    <td className="hidden md:table-cell">
      {new Intl.DateTimeFormat("en-US").format(item.startTime)}
    </td>
    {/* <td className='hidden md:table-cell'>{item.type}</td> */}

    <td>
      <div className="flex items-center gap-2">
        {role === "admin" && (
          <>
            <FormModal table={"result"} type={"update"} data={item} />
            <FormModal table={"result"} type={"delete"} id={item.id} />
          </>
        )}
      </div>
    </td>
  </tr>
);
async function ResultsListPage({ searchParams }) {
  const { page, ...queryParams } = searchParams;
  const p = page ? parseInt(page) : 1;
  const query = {};

  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        switch (key) {
          case "studentId":
            query.studentId = value;
            break;
          case "search":
            const lowerCaseValue = value.toLowerCase();
            query.OR = [
             {exam :  { title :{contains: lowerCaseValue  } }},
             {student :  { name :  {contains: lowerCaseValue} }},
            ];
            break;
          default:
            break;
        }
      }
    }
  }
  const [dataRes, count] = await prisma.$transaction([
    prisma.result.findMany({
      where: query,
      include: {
        student: {
          select: { name: true },
        },
        exam: {
          include: {
            lesson: {
              select: {
                teacher: { select: { name: true, surname: true } },
                class: { select: { name: true } },
              },
            },
          },
        },
        assignment: {
          include: {
            lesson: {
              select: {
                teacher: { select: { name: true, surname: true } },
                class: { select: { name: true } },
              },
            },
          },
        },
      },
      take: ITEM_PER_PAGE,
      skip: (p - 1) * ITEM_PER_PAGE,
    }),
    prisma.result.count({
      where: query,
    }),
  ]);
  // console.log(data);

  const data = dataRes.map(item =>{
    const assessment = item.exam || item.assignment
    
    if(!assessment) return null

    const isExam = "startDate" in assessment
    return {
      id : item.id,
      title : assessment.title,
      score : item.score,
      teacherName : assessment.lesson.teacher.name,
      studentName : item.student.name,
      className : assessment.lesson.class.name,
      startTime : isExam ? assessment.startTime : assessment.startDate
    }
  })

  return (
    <div className="bg-white rounded-md p-4 m-4 mt-2 ">
      {/* TOP */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block  text-lg font-semibold">All Results</h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 w-full md:w-auto">
          {/* SEARCH BAR */}
          <TableSearch />
          {/* ICON BAR */}
          <div className="flex items-center gap-3 justify-end">
            <button className=" rounded-full w-8 h-8 flex justify-center items-center cursor-pointer bg-secondaryYellow p-2 text-black">
              <GiSettingsKnobs size={17} />
            </button>
            <button className=" rounded-full flex justify-center items-center cursor-pointer bg-secondaryYellow p-2 text-black">
              <BsSortDown size={17} />
            </button>
            {role === "admin" && (
              <FormModal table={"results"} type={"create"} />
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <div>
        <Table columns={columns} renderRow={renderRow} data={data} />
      </div>
      {/* PAGINATION */}
      <div>
        <Pagination page={p} count={count}/>
      </div>
    </div>
  );
}

export default ResultsListPage;
