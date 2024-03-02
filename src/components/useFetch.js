import { useEffect, useState } from "react";

const useFetch = (url, field, searchText, offset, limit) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
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
    fetch(`${url}?limit=${limit}&offset=${offset}`, options)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => setError(error));
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { data, isLoading, error };
};

export default useFetch;
