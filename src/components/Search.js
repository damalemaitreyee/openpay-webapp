import React, { useEffect, useState } from "react";
import "./search.css";
const Search = (props) => {
  const [searchField, setSearchField] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const fetchSuggestions = () => {
    const searchBody = {
      property: [searchField],
      operator: searchField == "all" ? "multi_match" : "match_phrase_prefix",
      searchText: searchQuery,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(searchBody),
    };
    fetch("http://localhost:8080/api/payments?limit=10&offset=0", options)
      .then((response) => response.json())
      .then((data) => {
        setSuggestions(data?.payments);
        console.log(data);
      })

      .catch((error) => console.error(error));
  };
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    props.setSearchText(e.target.value);
  };

  useEffect(() => {
    if (searchQuery.length >= 3) {
      fetchSuggestions();
    }
  }, [searchQuery]);

  return (
    <div className="search-container">
      <div className="search-by">
        <label>
          Search By
          <select
            onChange={(e) => {
              setSearchField(e.target.value);
              props.setSearchBy(e.target.value);
            }}
            defaultValue={"all"}
          >
            <option value="all">All</option>
            {props.searchFields
              .slice(0, props.searchFields.length - 1)
              .map((field) => {
                return (
                  <option value={field} key={field}>
                    {field}
                  </option>
                );
              })}
          </select>
        </label>
      </div>
      <div className="search-bar">
        <div>
          <input
            type="text"
            value={searchQuery}
            onChange={handleChange}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => {
              setShowSuggestions(false);
              setSuggestions([]);
            }}
          ></input>
          <button
            onClick={() =>
              props.populateTableData(true, searchField, searchQuery)
            }
          >
            Search The Data
          </button>
        </div>
        {showSuggestions && (
          <div className="suggestions-container">
            <ul>
              {suggestions &&
                suggestions.map((s) => (
                  <li key={s.Record_ID} className="suggestion-item">
                    <h3>{s.Covered_Recipient_First_Name}</h3>
                    <p>{s.Covered_Recipient_Last_Name}</p>
                    <p>{s.Recipient_Country}</p>
                    <p>{s.Covered_Recipient_Specialty_1}</p>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
