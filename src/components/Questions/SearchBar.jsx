import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SearchBarInput, Button } from './Styles.jsx';

const SearchBar = ({ searchQuestions }) => {

  const [search, setSearch] = useState('');

  const searchInput = (query) => {
    setSearch(query);
    if (query.length > 2) {
      searchQuestions(query);
    } else {
      searchQuestions();
    }
  }

  const officiallySearch = (e) => {
    e.preventDefault();
    searchQuestions(search);
  }

  return (
    <>
      <SearchBarInput type="text" id="search" name="search" placeholder="Have a question? Search for the answers…" onChange={e => searchInput(e.target.value)}/>
      <Button onClick={officiallySearch}>&#128269;</Button>
    </>
  )
}

export default SearchBar