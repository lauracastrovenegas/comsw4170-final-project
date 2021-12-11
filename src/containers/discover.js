/* This is the main Discover Page 
- uses CategoryCarousel to display different categories */

import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import SearchFilterBox from '../components/searchFilterBox';
import { discover_lists } from '../data/discover_lists';
import { CategoryCarousel } from '../components/categoryCarousel';
import { FilterPopUp } from '../components/filterPopup';

const PageWrapper = styled.div`
  
`;

const Content = styled.div`
  padding: 1rem 0rem 1rem 1rem;
  margin-bottom: 4.5rem;
`;

const Header = styled.div`
  display: flex;
`;

const Title = styled.div`
  font-size: 36px;
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
  const [isOpen, setOpen] = useState(false);

  const toggleFilters = () => {
    setOpen(!isOpen)
  }

  const updateSearch = async (input) => {
    setSearchBarText(input);
  };

  return (
      <PageWrapper>
        <Content>
        <Title>ListIt!</Title>
          <SearchFilterBox toggleFilter={toggleFilters} barText={searchBarText} setBarText={updateSearch} placeholder="Search..." margin="1.5"/>
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
          </Content>
          <FilterPopUp closePopup={toggleFilters} isOpen={isOpen}/>
      </PageWrapper>
  );
}

export default DiscoverPage;