import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SearchBarInput, Button } from './Styles.jsx';

const SearchBar = ({ filterResults }) => {

  const [search, setSearch] = useState('');

  // const searchInput = (e) => {
  //   e.preventDefault();
  //   setSearch(e.target.value);
  //   if (search.length > 2) {
  //     console.log(search);
  //     filterResults(search);
  //   } else {
  //     filterResults();
  //   }
  // }

  // const officiallySearch = (e) => {
  //   e.preventDefault();

  // }

  return (
    <>
      <SearchBarInput type="text" id="search" name="search" placeholder="Have a question? Search for the answers…" />
      <Button>&#128269;</Button>
    </>
  )
}

export default SearchBar