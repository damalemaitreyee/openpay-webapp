import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const TableRow = ({ row }) => {
  return (
    <tr>
      {Object.values(row).map((value, index) => (
        <td className="" key={index}>
          {value === null ? "-" : value}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
