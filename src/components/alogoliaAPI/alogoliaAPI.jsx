import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function AlogoliaAPI() {
  const [Search, setSearch] = useState([]);

  const [searchValue, setSearchValue] = useState("hooks");

  const [isLoading, setIsLoading] = useState(false);

  const getSearch = async (value) => {
    setIsLoading(true);
    const { data } = await axios.get(`https://hn.algolia.com/api/v1/search?query=${value}`);
    setSearch(data.hits);
    setIsLoading(false);
  };

  useEffect(() => {
    getSearch(searchValue);
  }, []);

  const renderSearches = () => {
    if (Search.length > 0) {
      return Search.map((hit) => {
        return (
          <li key={hit.created_at_i}>
            <a href={hit.url}>{hit.title}</a>
          </li>
        );
      });
    }
  };

  return (
    <div>
      <input type="text" onChange={(e) => setSearchValue(e.target.value)} value={searchValue} placeholder="Search..." />
      <button onClick={() => getSearch(searchValue)}>Search</button>
      {isLoading && <div>Loading...</div>}
      <ul>{renderSearches()}</ul>
    </div>
  );
}