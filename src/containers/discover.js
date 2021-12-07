/* This is the main Discover Page 
- uses CategoryCarousel to display different categories */

import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import SearchBar from '../components/searchBar';

const PageWrapper = styled.div`
  padding: 1rem 1rem 4.5rem 1rem;
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