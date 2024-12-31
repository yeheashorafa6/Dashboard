"use client";
import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { IoCloseSharp } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import dynamic from "next/dynamic";
// import TeacherForm from "../Forms/TeacherForm/TeacherForm";
// import StudentForm from "../Forms/StudentForm/StudentForm";

const TeacherForm = dynamic(() => import("../Forms/TeacherForm/TeacherForm"),{
  loading : () => <h1>Loading...</h1>
})

const StudentForm = dynamic(() => import("../Forms/StudentForm/StudentForm"),{
  loading : () => <h1>Loading...</h1>
})


const forms = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  student: (type, data) => <StudentForm type={type} data={data} />,
};
function FormModal({ table, type, data, id }) {
  console.log(data)
  const [open, setOpen] = useState(false);

  const bgColor =
    type === "create"
      ? "bg-secondaryYellow"
      : type === "update"
      ? "bg-sky"
      : "bg-primaryPurple";

  const textColor =
    type === "create"
      ? "text-black p-2"
      : type === "update"
      ? "text-teal-900"
      : "text-red-600";

  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="flex flex-col items-center justify-center p-4 gap-4">
        <span className="font-medium text-sm">
          All Data Will Be Lost , Are You Sure You Want To Delete This {table}
        </span>
        <button className="py-2 px-4 bg-red-600 w-max self-center text-white rounded-md">
          Delete
        </button>
      </form>
    ) : type === "create" || type === "update" ?(
      forms[table](type,data)
    ) : "Form Not Found";
  };
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ${bgColor} ${textColor}`}
      >
        {type === "create" ? (
          <GoPlus size={17} />
        ) : type === "update" ? (
          <FiEdit size={17} />
        ) : (
          <AiOutlineDelete size={17} />
        )}
      </button>
      {open && (
        <div className="w-full h-full  bg-black absolute bg-opacity-60 left-0 top-0 bottom-0 flex items-center justify-center z-50">
          <div className="rounded-md relative p-4 bg-white w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />
            <div
              className={`absolute cursor-pointer ${type === "delete" ? "top-3 right-4" : "top-9 right-8"}`}
              onClick={() => setOpen(false)}
            >
              <IoCloseSharp size={20} className="text-red-700 "/>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FormModal;
