import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Countries() {
  const [Countries, setCountries] = useState([]);

  const [SearchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getCountries = async () => {
      const { data } = await axios.get(
        "https://intense-mesa-62220.herokuapp.com/https://restcountries.herokuapp.com/api/v1/"
      );
      setCountries(data);
    };
    getCountries();
  }, []);

  const filterByValue = (value, array) => {
    return array.filter((item) => {
      return item.name.common.toLowerCase().includes(value.toLowerCase());
    });
  };

  const renderCountries = () => {
    if (Countries.length > 0) {
      return filterByValue(SearchTerm, Countries).map((country) => {
        return <li key={country.cca2}>{country.name.common}</li>;
      });
    }
  };

  return (
    <div>
      <input type="text" onChange={(e) => setSearchTerm(e.target.value)} value={SearchTerm} placeholder="Search..." />
      <ul>{renderCountries()}</ul>
    </div>
  );
}