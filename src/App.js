import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./App.css";
import DataTable from "./components/DataTable";
import Search from "./components/Search";

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
  const recordsPerPage = 30;
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

  return (
    <div className="App">
      <Search
        populateTableData={populateTableData}
        searchFields={searchFields}
        setSearchBy={setSearchBy}
        setSearchText={setSearchText}
      ></Search>
      {searchClicked && (
        <>
          <button>Export</button>
          <div className="table-container">
            <DataTable className="datatable" tableData={tableData}></DataTable>
            <ReactPaginate
              previousLabel={"← Previous"}
              nextLabel={"Next →"}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              className="pagination"
              pageClassName={"page-item"}
              previousLinkClassName={"pagination__link"}
              nextLinkClassName={"pagination__link"}
              disabledClassName={"pagination__link--disabled"}
              activeClassName={"active"}
              marginPagesDisplayed={4}
              pageRangeDisplayed={4}
            ></ReactPaginate>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
