import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import ReactPaginate from "react-paginate";
import "./App.css";
import DataTable from "./components/DataTable";
import Search from "./components/Search";
import { saveAs } from "file-saver";

function App() {
  const [tableData, setTableData] = useState([]);
  const [totalDataLength, setTotalDataLength] = useState(0);
  const [searchFields, setSearchFields] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchBy, setSearchBy] = useState(
    searchFields[searchFields.length - 1]
  );
  const [searchText, setSearchText] = useState("");
  // No of Records to be displayed on each page
  const recordsPerPage = 10;
  const indexOfLastRecord =
    currentPage == 0 ? 1 * recordsPerPage : currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const pageCount = Math.ceil(totalDataLength / recordsPerPage);

  const fetchTableData = (field, searchText, offset) => {
    const searchBody = {
      property: [field],
      operator: field == "all" ? "multi_match" : "match_phrase_prefix",
      searchText: searchText,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(searchBody),
    };
    fetch(
      `http://localhost:8080/api/payments?limit=${recordsPerPage}&offset=${offset}`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setTableData(data?.payments);
        setTotalDataLength(data?.totalCount);
      })
      .catch((error) => console.error(error));
  };

  const exportData = async (field, searchText, offset) => {
    const searchBody = {
      property: [field],
      operator: field == "all" ? "multi_match" : "match_phrase_prefix",
      searchText: searchText,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(searchBody),
    };
    const response = await fetch(
      `http://localhost:8080/api/payments/export?limit=${totalDataLength}&offset=${offset}`,
      options
    );
    if (!response.ok) {
      throw new Error(response);
    }

    const filename = response.headers
      .get("content-disposition")
      .split(";")
      .find((n) => n.includes("filename="))
      .replace("filename=", "")
      .trim();

    const blob = await response.blob();
    // Download the file
    saveAs(blob, filename);
  };

  const populateTableData = (clicked, field, searchText) => {
    fetchTableData(field, searchText, 0);
    setSearchClicked(clicked);
    setCurrentPage(0);
  };

  const getFields = async () => {
    fetch("http://localhost:8080/api/payments/search-fields", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setSearchFields(data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getFields();
    setSearchBy(searchFields[searchFields.length - 1]);
  }, []);
  useEffect(() => {
    setSearchBy(searchFields[searchFields.length - 1]);
  }, [searchFields]);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
    const indexOfLastRecord = (selectedPage + 1) * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    fetchTableData(searchBy, searchText, indexOfFirstRecord);
  }
  const handleExport = () => {
    exportData(searchBy, searchText, 0);
  };

  return (
    <div className="App">
      <Search
        populateTableData={populateTableData}
        searchFields={searchFields}
        setSearchBy={setSearchBy}
        setSearchText={setSearchText}
        setTableData={setTableData}
        setSearchClicked={setSearchClicked}
      ></Search>

      {searchClicked && (
        <div className="table-container">
          <button
            onClick={handleExport}
            className="btn btn-secondary float-top mx-5"
          >
            Export to Excel
          </button>
          <div className="datatable">
            <DataTable tableData={tableData}></DataTable>
          </div>
          <ReactPaginate
            previousLabel={"← Previous"}
            nextLabel={"Next →"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            className="pagination"
            pageClassName={"page-item"}
            activeClassName={"active"}
            marginPagesDisplayed={4}
            pageRangeDisplayed={4}
          ></ReactPaginate>
        </div>
      )}
    </div>
  );
}

export default App;
