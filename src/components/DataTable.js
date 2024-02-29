import React from "react";
import TableRow from "./TableRow";
import "./datatable.css";

const DataTable = (props) => {
  let suggestionList = props.suggestions.map((item) => ({
    Covered_Recipient_First_Name: item.Covered_Recipient_First_Name,
    Covered_Recipient_Last_Name: item.Covered_Recipient_Last_Name,
    Recipient_City: item.Recipient_City,
    Recipient_Country: item.Recipient_Country,
    Covered_Recipient_Specialty_1: item.Covered_Recipient_Specialty_1,
    Record_ID: item.Record_ID,
  }));

  const rows = [];
  suggestionList.forEach((element) => {
    rows.push(<TableRow row={element} key={element.Record_ID} />);
  });
  return (
    <div>
      <table className="filter-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>City</th>
            <th>Country</th>
            <th>Speciality</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default DataTable;
