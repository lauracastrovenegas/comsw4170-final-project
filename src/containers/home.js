/* This is the Home Page */

import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { UpdateCard } from '../components/updateCard';
import { updates } from '../data/home_updates';
import SearchFilterBox from '../components/searchFilterBox';
import { FilterPopUp } from '../components/filterPopup';

const PageWrapper = styled.div`
  
`;

const Content = styled.div`
  padding: 1rem;
  margin-bottom: 3rem;
`;

const Title = styled.div`
  font-size: 36px;
  margin: 0.5rem 1rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.yellow};
`;

const UpdateCardWrap = styled.div`
  margin: 1rem 0rem;
`;

const Updates = styled.div`
  max-height: 75vh;
  overflow: scroll;
`;

const HomePage = () => {
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
      <Updates>
        {updates ? updates.map(update => (
              <UpdateCardWrap key={update.category}>
                  <UpdateCard 
                      user_name={update.user_name}
                      user_image={update.user_image}
                      list_title={update.list_title}
                      entry_title={update.entry_title}
                      image_URL={update.image_URL}
                      rate={update.rate}
                      hasLink={update.hasLink}
                      hasLocation={update.hasLocation}
                      notes={update.notes}
                  />
              </UpdateCardWrap>
          )): null}
      </Updates>
      </Content>
      <FilterPopUp showCategories={true} closePopup={toggleFilters} isOpen={isOpen}/>
  </PageWrapper>
  );
}

export default HomePage;