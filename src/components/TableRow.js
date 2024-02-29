import React from 'react'

const TableRow = ({row}) => {
  return (
    <tr>
      <td>{row.Covered_Recipient_First_Name}</td>
      <td>{row.Covered_Recipient_Last_Name}</td>
      <td>{row.Recipient_City}</td>
      <td>{row.Recipient_Country}</td>
      <td>{row.Covered_Recipient_Specialty_1}</td>
    </tr>
  );
}

export default TableRow