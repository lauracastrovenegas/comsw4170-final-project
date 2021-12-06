/* This is the main My Lists Page */

import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import SearchBar from '../components/searchBar';
import { ListCard } from '../components/listCard';
import { myLists } from '../data/myLists';

const PageWrapper = styled.div`

`;

const ListCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CardWrapper = styled.div`
  width: 50%;
`;

const MyLists = () => {
  const [searchBarText, setSearchBarText] = useState('');

  const updateSearch = async (input) => {
    setSearchBarText(input);
  };

  return (
    <PageWrapper>
      <SearchBar barText={searchBarText} setBarText={updateSearch} placeholder="Lists, Categories ..."/>
      <ListCards>
        {myLists.map(list => (
              <CardWrapper key={list.id}>
                  <ListCard 
                      id={list.id}
                      title={list.title}
                      date_created={list.date_created}
                      category={list.category}
                  />
              </CardWrapper>
          ))}
      </ListCards>
    </PageWrapper>
  );
}

export default MyLists;
