import React, { useEffect } from "react";
import "./search.css";
const Search = (props) => {
  let suggestionList = props.suggestions.map((item) => ({
    Covered_Recipient_First_Name: item.Covered_Recipient_First_Name,
    Covered_Recipient_Last_Name: item.Covered_Recipient_Last_Name,
    Recipient_City: item.Recipient_City,
    Recipient_Country: item.Recipient_Country,
    Covered_Recipient_Specialty_1: item.Covered_Recipient_Specialty_1,
    Record_ID: item.Record_ID,
  }));
  useEffect
const getSearchByOptions= async () => {
  // const data = await fetch(searchQuery);
  // const json = await data.json();
  const json = data.payments;
  //console.log(json[1]);
  setSuggestions(json);
};
  return (
    <div className="search-container">
      <div className="search-by">
        <label>
          Search By
          <select defaultValue="all" onChange="">
            <option value="all">All</option>
            <option value="fname">Covered Recipient First Name</option>
            <option value="lname">Covered Recipient Last Name</option>
            <option value="city">Recipient City</option>
            <option value="country">Recipient Country</option>
            <option>Covered Recipient Speciality</option>
          </select>
        </label>
      </div>
      <div className="search-bar">
        <div>
          <input
            type="text"
            value={props.searchQuesry}
            onChange={(e) => props.setSearchQuesry(e.target.value)}
            onFocus={() => props.setShowSuggestions(true)}
            onBlur={() => props.setShowSuggestions(false)}
          ></input>
          <button onClick={props.searchData}>Search The Data</button>
        </div>
        {props.showSuggestions && (
          <div className="suggestions-container">
            <ul>
              {suggestionList.map((s) => (
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
