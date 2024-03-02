import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import TableRow from "./TableRow";
import "./datatable.css";

const DataTable = (props) => {
  const rows = [];
  props.tableData.forEach((element) => {
    rows.push(<TableRow row={element} key={element.Record_ID} />);
  });

  return (
    <div>
      <div className="table-responsive">
        <table className="filter-table">
          <thead className="">
            <tr>
              {props.tableData[0] &&
                Object.keys(props.tableData[0]).map((property) => (
                  <th key={property}>{property}</th>
                ))}
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
