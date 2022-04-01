import React, { useEffect, useState } from "react";

const Search = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState("");
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  useEffect(() => {
    handleSearch(searchText);
  }, [searchText]);
  return (
    <div style={{ textAlign: "center" }}>
      <input
        type="text"
        placeholder="search country"
        value={searchText}
        onChange={handleChange}
        style={{ padding: "5px", textAlign: "center" }}
      />
    </div>
  );
};

export default Search;
