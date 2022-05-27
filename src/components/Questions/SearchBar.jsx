import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { SearchBarInput, Button } from './Styles.jsx';

const SearchBar = (props) => {
  return (
    <>
    <SearchBarInput type="text" id="search" name="search" placeholder="Have a question? Search for the answers…"/>
    <Button>&#128269;</Button>
    </>
  )
}

export default SearchBar