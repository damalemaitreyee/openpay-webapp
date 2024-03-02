import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import "./search.css";
const Search = (props) => {
  const [searchField, setSearchField] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestionSelected, setSuggestionSelected] = useState(true);

  const fetchSuggestions = () => {
    const searchBody = {
      property: [searchField],
      operator: searchField === "all" ? "multi_match" : "match_phrase_prefix",
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
      })

      .catch((error) => console.error(error));
  };
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    props.setSearchText(e.target.value);
  };
  const onSuggestionSelect = (data) => {
    const datalist = [];
    datalist.push(data);
    props.setTableData(datalist);
    props.setSearchClicked(true);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  useEffect(() => {
    if (searchQuery.length >= 3) {
      fetchSuggestions();
    }
  }, [searchQuery]);

  return (
    <div className="search-container">
      <div className="search-by">
        <Form.Select
          name="search_by"
          value={searchField}
          onChange={(e) => {
            setSearchField(e.target.value);
            props.setSearchBy(e.target.value);
          }}
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
        </Form.Select>
      </div>
      <div className="search-bar">
        <div className="input-group">
          <input
            type="text"
            value={searchQuery}
            onChange={handleChange}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => {
              if (!suggestionSelected) {
                setSuggestions([]);
                setShowSuggestions(false);
              }
            }}
            className="form-control"
            placeholder="Type Here"
          ></input>
          <div className="input-group-append">
            <button
              onClick={() => {
                props.populateTableData(true, searchField, searchQuery);
                setShowSuggestions(false);
                setSuggestions([]);
              }}
              className="btn btn-secondary"
              type="button"
            >
              Search
            </button>
          </div>
        </div>

        {showSuggestions && (
          <div className="suggestions-container">
            <ul className="">
              {suggestions &&
                suggestions.map((s) => (
                  <li key={s.Record_ID} className="">
                    <p onClick={() => onSuggestionSelect(s)}>
                      {props.searchFields
                        .filter((f) => f !== "all")
                        .map((sf) => (
                          <span key={sf}>
                            <strong>{sf} :</strong>
                            <span> {s[sf]} </span>
                          </span>
                        ))}
                    </p>
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
