import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputFields from "@/components/InputFields/InputFields";
import { FaCloudUploadAlt } from "react-icons/fa";

const schema = z.object({
  name: z
    .string()
    .min(4, { message: "Username must be at least 4 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),
  teacher: z.string().min(2, { message: "First Name Is Required" }),
  lastName: z.string().min(2, { message: "Last Name Is Required!" }),
  phone: z.string().min(2, { message: "Phone Is Required!" }),
  address: z.string().min(2, { message: "Address Is Required!" }),
});
function SubjectForm({ type, data }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const teacherAuthenticationInformation = [
    {
      id: 1,
      name: "username",
      label: "UserName",
      type: "text",
      defaultValue: data?.username,
    },
    {
      id: 2,
      name: "email",
      label: "Email",
      type: "email",
      defaultValue: data?.email,
    },
    {
      id: 3,
      name: "password",
      label: "Password",
      type: "password",
      defaultValue: data?.password,
    },
  ];

  const teacherPersonalInformation = [
    {
      id: 1,
      name: "firstName",
      label: "FirstName",
      type: "text",
      defaultValue: data?.firstName,
    },
    {
      id: 2,
      name: "lastName",
      label: "LastName",
      type: "text",
      defaultValue: data?.lastName,
    },
    {
      id: 3,
      name: "phone",
      label: "Phone",
      type: "text",
      defaultValue: data?.phone,
    },
    {
      id: 4,
      name: "address",
      label: "Address",
      type: "text",
      defaultValue: data?.address,
    },
    {
      id: 5,
      name: "birthday",
      label: "Birthday",
      type: "date",
      defaultValue: data?.birthday,
    },
    {
      id: 6,
      name: "bloodType",
      label: "Blood Type",
      type: "text",
      defaultValue: data?.bloodType,
    },
  ];

  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <div>
      <form className="flex flex-col gap-8" onSubmit={onSubmit}>
        <h1 className="w-full bg-gray-100 rounded-md  text-gray-800 p-4 text-lg font-semibold">
          Create A New Parent
        </h1>
        <span className="font-medium text-xs text-gray-400">
          Authentication Information
        </span>
        <div className="flex justify-between flex-wrap gap-4">
          {teacherAuthenticationInformation.map((item) => {
            console.log(errors?.name);
            return (
              <InputFields
                key={item.id}
                name={item.name}
                label={item.label}
                type={item.type}
                register={register}
                defaultValue={item.defaultValue}
                error={errors[item.name]}
              />
            );
          })}
        </div>
        <span className="font-medium text-xs text-gray-400">
          Personal Information
        </span>
        <div className="flex justify-between flex-wrap gap-4">
          {teacherPersonalInformation.map((item) => {
            // console.log(item.name)
            return (
              <InputFields
                key={item.id}
                name={item.name}
                label={item.label}
                type={item.type}
                register={register}
                defaultValue={item.defaultValue}
                error={errors[item.name]}
              />
            );
          })}
        </div>
        <button className="bg-blue-400 text-white p-2 rounded-md">
          {type === "create" ? "Create" : "Update"}
        </button>
      </form>
    </div>
  );
}

export default SubjectForm;
