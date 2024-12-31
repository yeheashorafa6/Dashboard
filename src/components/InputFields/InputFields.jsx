import React from "react";

function InputFields({
  label,
  type,
  register,
  name,
  defaultValue,
  error,
  inputProps,
}) {
  return (
    <div className="flex flex-col gap-2 w-full md:w-1/4">
      <label className="text-xs text-gray-500">{label}</label>
      <input
        type={type}
        {...register(name)}
        className="ring-[1.5px] Iring-gray-300 p-2 rounded-md text-sm w-full"
        {...inputProps}
        defaultValue={defaultValue}
      />
      {error?.message && (
        <p className="text-xs text-red-600">{error.message.toString()}</p>
      )}
    </div>
  );
}

export default InputFields;
