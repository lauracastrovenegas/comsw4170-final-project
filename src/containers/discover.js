/* This is the main Discover Page 
- uses CategoryCarousel to display different categories */

import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import SearchFilterBox from '../components/searchFilterBox';
import { discover_lists } from '../data/discover_lists';
import { CategoryCarousel } from '../components/categoryCarousel';

const PageWrapper = styled.div`
  padding: 1rem;
`;

const Header = styled.div`
  display: flex;
`;

const Title = styled.div`
  font-size: 2rem;
  margin: 0.5rem 1rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.yellow};
`;

const CarouselWrapper = styled.div`
  margin: 0.5rem 0rem;
`;

const Categories = styled.div`
  margin: 0rem auto;
  padding-bottom: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
  max-height: 71vh;
  ::-webkit-scrollbar {
    width: 0; 
    background: transparent;
  }
`;

const DiscoverPage = () => {
  const [searchBarText, setSearchBarText] = useState('');

  const updateSearch = async (input) => {
    setSearchBarText(input);
  };

  return (
      <PageWrapper>
        <Title>ListIt!</Title>
          <SearchFilterBox barText={searchBarText} setBarText={updateSearch} placeholder="Search..." margin="1"/>
          <Categories>
            {discover_lists ? discover_lists.map(item => (
                  <CarouselWrapper key={item.category}>
                      <CategoryCarousel 
                          catid={item.id}
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