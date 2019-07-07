import React from "react";
import "./searchBox.css";

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div className="search">
      <input type="search" placeholder={placeholder} onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
