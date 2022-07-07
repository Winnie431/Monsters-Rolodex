import React from "react";
import "./searchCards.styles.css";

const SearchCards = ({placeholder ,handleSearch,searchField}) => {

  return (
    <input
    className="search"
      type="search"
      placeholder={placeholder}
      value={searchField}
      onChange={handleSearch}
    />
  );
};

export default SearchCards;
