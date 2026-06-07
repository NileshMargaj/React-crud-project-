import React from "react";

const DisplaySearch = ({ id, fName, lName, age, city }) => {
  return (
    <tr className="border-b text-center hover:bg-slate-700">
      <td className="px-4 py-2">{id}</td>
      <td className="px-4 py-2 font-semibold">
        {fName} {lName}
      </td>
      <td className="px-4 py-2">{age}</td>
      <td className="px-4 py-2">{city}</td>
    </tr>
  );
};

export default DisplaySearch;