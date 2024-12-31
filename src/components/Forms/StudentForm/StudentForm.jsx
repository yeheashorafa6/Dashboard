import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputFields from "@/components/InputFields/InputFields";
import { FaCloudUploadAlt } from "react-icons/fa";

const schema = z.object({
  username: z
    .string()
    .min(4, { message: "Username must be at least 4 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" }),
  firstName: z.string().min(2, { message: "First Name Is Required" }),
  lastName: z.string().min(2, { message: "Last Name Is Required!" }),
  phone: z.string().min(2, { message: "Phone Is Required!" }),
  address: z.string().min(2, { message: "Address Is Required!" }),
  birthday: z.date({ message: "Birthday Is Required!" }),
  bloodType: z.string().min(2, { message: "Blood Type Is Required!" }),
  sex: z.enum(["male", "female"], { message: "Sex Is Required!" }),
  img: z.instanceof(File, { message: "Image Is Required!" }),
});
function StudentForm({ type, data }) {
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
          Create A New Student
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

          <div className="flex flex-col gap-2 w-full md:w-1/4">
            <label className="text-xs text-gray-500">Sex</label>
            <select
              className="ring-[1.5px] Iring-gray-300 p-2 rounded-md text-sm w-full"
              register={register("sex")}
              defaultValue={data?.sex}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.sex?.message && (
              <p className="text-xs text-red-600">
                {errors.sex.message.toString()}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
            <label
              className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
              htmlFor="img"
            >
              <FaCloudUploadAlt size={28} />
              <span>Upload A Photo</span>
            </label>
            {
              type === "create" ? (
                <input
              type="file"
              id="img"
              {...register("img")}
              className="hidden"
              defaultValue={data?.img}
            />
              ):
              <input
              type="file"
              id="img"
              {...register("img")}
              className="hidden"
            />
            }
            {
              data?.img && (
                <img src={data.img} alt="Uploaded Preview" className="w-24 h-24 object-cover rounded-md" />
              )
            }
            {errors.img?.message && (
              <p className="text-xs text-red-600">
                {errors.img.message.toString()}
              </p>
            )}
          </div>
        </div>

        <button className="bg-blue-400 text-white p-2 rounded-md">
          {type === "create" ? "Create" : "Update"}
        </button>
      </form>
    </div>
  );
}

export default StudentForm;
