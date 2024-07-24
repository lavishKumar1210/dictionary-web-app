import React, { useState } from "react";
import "./Search.css";

function Search(props) {
  const [searchedItem, setSearchedItem] = useState("");
  const inputChangeHandler = (event) => {
    setSearchedItem(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onValueChange(searchedItem);
    setSearchedItem("");
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        className="search-bar"
        value={searchedItem}
        type="text"
        placeholder="search for any word..."
        onChange={inputChangeHandler}
      />
    </form>
  );
}

export default Search;
