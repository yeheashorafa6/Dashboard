import React from "react";

function Table({ columns , renderRow , data}) {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-gray-700 text-left text-sm">
          {columns.map((col) => (
            <th key={col.accessor} className={col.className}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => renderRow(item))}
      </tbody>
    </table>
  );
}

export default Table;
