import React from "react";
import "./search.css";
  
function Search({ searchInput, search }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Hvilken film skal det bli"
        className="search"
        onChange={searchInput}
        onKeyPress={search}
      />
    </div>
  );
}
  
export default Search;