import Image from "next/image";
import React from "react";
import { MdBloodtype  } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoCalendarClear } from "react-icons/io5";
import BigCalender from "@/components/BigCalender/BigCalender";
import Announcements from "@/components/Announcements/Announcements";
import Link from "next/link";
import Performance from "@/components/Performance/Performance";

function SingleStudentPage() {
  return (
    <div className="flex flex-1 p-4 gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="bg-sky py-6 px-4 rounded-lg flex flex-1 gap-4">
            {/* IMAGE */}
            <div className="w-1/3">
              <Image
                src={"https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                alt=""
                className="w-32 h-32 rounded-full object-cover"
                width={130}
                height={130}
              />
            </div>
            {/* INFO */}
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">Ahmed Mohammed</h1>
              <p className="text-xs text-gray-500 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex items-center justify-between gap-4 text-sm font-medium flex-wrap">
                <div className="flex gap-3 items-center w-full md:w-1/3 lg:w-full 2xl:w-1/3">
                  <MdBloodtype size={20}/>
                  <span>B+</span>
                </div>
                <div className="flex gap-3 items-center w-full md:w-1/3 lg:w-full 2xl:w-1/3">
                  <IoCalendarClear size={20}/>
                  <span>Decemper 2025</span>
                </div>
                <div className="flex gap-3 items-center w-full md:w-1/3 lg:w-full 2xl:w-1/3">
                  <IoMail size={20}/>
                  <span>ahmed@gmail.com</span>
                </div>
                <div className="flex gap-3 items-center w-full md:w-1/3 lg:w-full 2xl:w-1/3">
                  <FaPhoneAlt size={20}/>
                  <span>987654321</span>
                </div>
              </div>
            </div>
          </div>
          {/* SMALL CARD */}
          <div className="flex flex-1 gap-4 justify-between flex-wrap">
            {/* CARD 1 */}
            <div className="bg-white p-4 rounded-md flex items-center gap-4 w-full md:w-[48%] lg:w-[45%] 2xl:w-[48%]">
              <Image src={"/singleAttendance.png"} alt="single Attendance" width={24} height={24} className="w-7 h-7" />
              <div className="flex flex-col">
                <h1 className="text-xl font-semibold">94%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>

             {/* CARD 2 */}
             <div className="bg-white p-4 rounded-md flex items-center gap-4 w-full md:w-[48%] lg:w-[45%] 2xl:w-[48%]">
              <Image src={"/singleBranch.png"} alt="single Branch" width={24} height={24} className="w-7 h-7" />
              <div className="flex flex-col">
                <h1 className="text-xl font-semibold">7th</h1>
                <span className="text-sm text-gray-400">Grade</span>
              </div>
            </div>

             {/* CARD 3 */}
             <div className="bg-white p-4 rounded-md flex items-center gap-4 w-full md:w-[48%] lg:w-[45%] 2xl:w-[48%]">
              <Image src={"/singleLesson.png"} alt="single Lesson" width={24} height={24} className="w-7 h-7" />
              <div className="flex flex-col">
                <h1 className="text-xl font-semibold">18</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>

             {/* CARD 4 */}
             <div className="bg-white p-4 rounded-md flex items-center   gap-4 w-full md:w-[48%] lg:w-[45%] 2xl:w-[48%]">
              <Image src={"/singleClass.png"} alt="single Class" width={24} height={24} className="w-7 h-7" />
              <div className="flex flex-col">
                <h1 className="text-xl font-semibold">5A</h1>
                <span className="text-sm text-gray-400">Classes</span>
              </div>
            </div>

          </div>
        </div>
        {/* BOTTOM  */}
        <div className="mt-4 p-4 bg-white rounded-md h-[800px]">
          <h1>Student&apos;s Schedule</h1>
          <BigCalender/>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-2 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="text-gray-700 rounded-lg text-sm p-4 flex gap-4 flex-wrap mt-4">
            <Link className="p-3 bg-sky rounded-md" href={`/List/Lessons?classId=${2}`}>Student&apos;s Lseeons</Link>
            <Link className="p-3 bg-skyight rounded-md" href={`/List/Teachers?classId=${2}`}>Student&apos;s Teachers</Link>
            <Link className="p-3 bg-primaryPurple rounded-md" href={`/List/Results?studentId=${"student2"}`}>Student&apos;s Results</Link>
            <Link className="p-3 bg-secondaryYellow rounded-md" href={`/List/Exams?classId=${2}`}>Student&apos;s Exams</Link>
            <Link className="p-3 bg-primaryPurpleLight rounded-md" href={`/List/Assignments?classId=${2}`}>Student&apos;s Assignments</Link>
          </div>
        </div>
        {/* PERFORMANCE */}
        <Performance/>
        {/* ANNOUNCEMENTS */}
        <Announcements/>
      </div>
    </div>
  );
}

export default SingleStudentPage;
