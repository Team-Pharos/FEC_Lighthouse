import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SearchBarInput, Button } from './Styles.jsx';

const SearchBar = ({ filterResults }) => {

  const searchInput = (e) => {
    e.preventDefault();
    var filter = e.target.value;
    if (filter.length > 2) {
      filterResults(e.target.value);
    } else {
      filterResults();
    }
  }

  return (
    <>
      <SearchBarInput type="text" id="search" name="search" placeholder="Have a question? Search for the answers…" onChange={searchInput}/>
      <Button>&#128269;</Button>
    </>
  )
}

export default SearchBar