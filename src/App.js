import { useEffect, useState } from "react";
import "./App.css";
import DataTable from "./components/DataTable";
import Search from "./components/Search";
import data from "./small-data.json";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchFields, setSearchFields] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // // No of Records to be displayed on each page
  // const [recordsPerPage] = useState(10);
  // const indexOfLastRecord = currentPage * recordsPerPage;
  // const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchSuggestion();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const getSearchSuggestion = async () => {
    // const data = await fetch(searchQuery);
    // const json = await data.json();
    const json = data.payments;
    //console.log(json[1]);
    setSuggestions(json);
  };

  return (
    <div className="App">
      <Search
        setSearchQuesry={setSearchQuery}
        setShowSuggestions={setShowSuggestions}
        showSuggestions={showSuggestions}
        searchQuery={searchQuery}
        suggestions={suggestions}
      ></Search>
      <DataTable className="datatable" suggestions={suggestions}></DataTable>
    </div>
  );
}

export default App;
