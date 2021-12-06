/* This is the main Discover Page */

import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import SearchBar from '../components/searchBar';

const PageWrapper = styled.div`

`;

const DiscoverPage = () => {
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

export default DiscoverPage;