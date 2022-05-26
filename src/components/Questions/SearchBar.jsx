import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { SearchBarInput } from './Styles.jsx';

const SearchBar = (props) => {
  return (
    <>
    <SearchBarInput type="text" id="search" name="search" placeholder="Have a question? Search for the answers…"/>
    <button>&#128269;</button>
    </>
  )
}

export default SearchBar