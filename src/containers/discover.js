/* This is the main Discover Page 
- uses CategoryCarousel to display different categories */

import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import SearchBar from '../components/searchBar';
import { discover_lists } from '../data/discover_lists';
import { CategoryCarousel } from '../components/categoryCarousel';

const PageWrapper = styled.div`
  padding: 1rem 1rem 4.5rem 1rem;
`;

const CarouselWrapper = styled.div`
  
`;

const Categories = styled.div`
  
`;

const Title = styled.div`
  font-size: 2rem;
  margin: 1rem;
`;


const DiscoverPage = () => {
  const [searchBarText, setSearchBarText] = useState('');

  const updateSearch = async (input) => {
    setSearchBarText(input);
  };

  return (
      <PageWrapper>
        <Title>Discover</Title>
          <SearchBar barText={searchBarText} setBarText={updateSearch} placeholder="Lists, Categories ..."/>
          <Categories>
            {discover_lists ? discover_lists.map(item => (
                  <CarouselWrapper key={item.category}>
                      <CategoryCarousel 
                          category={item.category}
                          lists={item.lists}
                      />
                  </CarouselWrapper>
              )): null}
          </Categories>
      </PageWrapper>
  );
}

export default DiscoverPage;