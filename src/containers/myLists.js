/* This is the main My Lists Page */

import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import SearchBar from '../components/searchBar';
import { ListCard } from '../components/listCard';
import { myLists } from '../data/myLists';
import { AddButton } from '../components/addFloatButton';


const PageWrapper = styled.div`
  padding: 1rem;
`;

const Title = styled.div`
  font-size: 2rem;
  margin: 1rem;
`;

const ListCards = styled.div`
  margin: 0rem auto;
  padding-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
  max-height: 70vh;
  ::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
  }
`;

const CardWrapper = styled.div`
  flex-grow: 1;
  max-width: 45%;
  margin: 0.5rem;
`;

const AddButtonWrapper = styled.div`
  z-index: 1; 
  position: absolute; 
  bottom: 6rem; 
  right: 1rem;
`;

const MyLists = () => {
  const [searchBarText, setSearchBarText] = useState('');

  const updateSearch = async (input) => {
    setSearchBarText(input);
  };

  return (
    <PageWrapper>
      <Title>My Lists</Title>
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
      <AddButtonWrapper><AddButton route="/list-form/"/></AddButtonWrapper>
    </PageWrapper>
  );
}

export default MyLists;
