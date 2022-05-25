import React, {useState, useEffect} from 'react';
import axios from 'axios';

const SearchBar = (props) => {
  return (
    <>
    <input type="text" id="search" name="search" placeholder="Have a question? Search for the answers…"/>
    <button>&#128269;</button>
    </>
  )
}

export default SearchBar