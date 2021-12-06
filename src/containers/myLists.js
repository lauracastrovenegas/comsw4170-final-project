/* This is the main My Lists Page */

import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import SearchBar from '../components/searchBar';

const PageWrapper = styled.div`

`;

const MyLists = () => {
  const [searchBarText, setSearchBarText] = useState('');

  const updateSearch = async (input) => {
    setSearchBarText(input);
  };

  return (
    <PageWrapper>
      <SearchBar barText={searchBarText} setBarText={updateSearch} placeholder="Lists, Categories ..."/>
    </PageWrapper>
  );
}

export default MyLists;
