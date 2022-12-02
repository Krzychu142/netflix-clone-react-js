import React, { useState } from "react";
import "./Search.css";
import { useDispatch } from "react-redux";
import { fetch, increment } from "./features/searchSlice";

function Search() {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  async function search(e) {
    e.preventDefault();
    giveData();
  }

  function giveData() {
    query &&
      dispatch(
        fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=c239597f83286dbda42c703bd79d90fd&query=${query}`
        )
      );
    dispatch(increment());
  }

  function queryHandler(e) {
    setQuery(e.target.value);
  }

  return (
    <div className="search">
      <form>
        <button onClick={search}>Search</button>
        <input
          type="text"
          id="query"
          placeholder="Type there"
          onChange={queryHandler}
        />
      </form>
    </div>
  );
}

export default Search;
