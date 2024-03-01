import { useEffect, useState } from "react";

const useFetch = (field, searchText, offset) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    const searchBody = {
      property: [field],
      operator: "match_phrase_prefix",
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
      `http://localhost:8080/api/payments?limit=10&offset=${offset}`,
      options
    )
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
