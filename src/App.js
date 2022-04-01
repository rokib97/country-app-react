import { useEffect, useState } from "react";
import "./App.css";
import Countries from "./components/Countries";
import Search from "./components/Search";

const URL = `https://restcountries.com/v3.1/all`;

function App() {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const fetchData = async (URl) => {
    setLoading(true);

    try {
      const response = await fetch(URL);
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data);
      setLoading(false);
      setError(null);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(URL);
  }, []);

  const handleSearch = (inputValue) => {
    let value = inputValue.toLowerCase();
    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    setFilteredCountries(newCountries);
  };
  const handleRemoveCountry = (name) => {
    const filter = filteredCountries.filter(
      (country) => country.name.common !== name
    );
    setFilteredCountries(filter);
  };
  return (
    <>
      <h1>Country App</h1>
      <Search handleSearch={handleSearch}></Search>
      {isLoading && <h2>Loading..</h2>}
      {error && <h2>{error.message}</h2>}
      {countries && (
        <Countries
          countries={filteredCountries}
          handleRemoveCountry={handleRemoveCountry}
        ></Countries>
      )}
    </>
  );
}

export default App;
