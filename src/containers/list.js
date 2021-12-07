/* This is a generic "List" page with a list of entries */

import React from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import SearchBar from '../components/searchBar';
import { myLists } from '../data/myLists';
import { EntryCard } from '../components/entryCard';
import { BackButton } from '../components/backBtn';
import { AddButton } from '../components/addFloatButton';

const PageWrapper = styled.div`
  padding: 1rem;
`;

const EntryCards = styled.div`
  padding-bottom: 3.5rem;
  overflow: scroll;
  max-height: 65vh;
  ::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
  }
`;

const CardWrapper = styled.div`
  margin: 1rem 0rem;
`;

const Title = styled.div`
  padding: 0.7rem;
  font-size: 2rem;
`;

const AddButtonWrapper = styled.div`
  z-index: 1; 
  position: absolute; 
  bottom: 6rem; 
  right: 1rem;
`;

const ListPage = ({
  title, // title of specific list
  category, // category of list
  entries // array of entries in list
  // add more props as needed
}) => {
  const { id } = useParams();
  const [searchBarText, setSearchBarText] = useState('');
  const [list, setList] = useState({});

  useEffect(() => {
    setList(fetchList(id))
  }, []);

  const fetchList = (id) => {
    return myLists.find((element) => {
      return element.id === id;
    })
  };

  const updateSearch = async (input) => {
    setSearchBarText(input);
  };

  return (
      <PageWrapper>
        <BackButton text="My Lists" route={`/my-lists/`}/>
        <Title>{list.title}</Title>
          <SearchBar barText={searchBarText} setBarText={updateSearch} placeholder="Search..."/>
          <EntryCards>
            {list.entries ? list.entries.map(entry => (
                  <CardWrapper key={list.id}>
                      <EntryCard 
                          listid={list.id}
                          id={entry.id}
                          title={entry.title}
                          location={entry.location}
                          notes={entry.notes}
                          date_created={entry.date_created}
                          reaction={entry.reaction}
                      />
                  </CardWrapper>
              )): null}
          </EntryCards>
          <AddButtonWrapper><AddButton route="/entry-form/"/></AddButtonWrapper>
      </PageWrapper>
  );
}

export default ListPage;