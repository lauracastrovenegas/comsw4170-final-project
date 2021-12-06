import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import SearchBar from '../components/searchBar';

const PageWrapper = styled.div`

`;

const SearchBox = styled.div`
    
`;

const DiscoverPage = () => {
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

export default DiscoverPage;