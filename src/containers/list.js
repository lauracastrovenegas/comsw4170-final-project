/* This is a generic "List" page with a list of entries */

import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import SearchBar from '../components/searchBar';

const PageWrapper = styled.div`

`;

const SearchBox = styled.div`

`;

const ListPage = ({
  title, // title of specific list
  category, // category of list
  entries // array of entries in list
  // add more props as needed
}) => {
  
  const [searchBarText, setSearchBarText] = useState('');

  const updateSearch = async (input) => {
    setSearchBarText(input);
  };

  return (
      <PageWrapper>
          <SearchBox><SearchBar barText={searchBarText} setBarText={updateSearch} placeholder="Lists, Categories ..."/></SearchBox>
      </PageWrapper>
  );
}

export default ListPage;