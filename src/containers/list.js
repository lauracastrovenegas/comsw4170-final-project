/* This is a generic "List" page with a list of entries */

import React from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import SearchBar from '../components/searchBar';
import { myLists } from '../data/myLists';
import { EntryCard } from '../components/entryCard';

const PageWrapper = styled.div`

`;

const EntryCards = styled.div`

`;

const CardWrapper = styled.div`

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
        <h1>{list.title}</h1>
          <SearchBar barText={searchBarText} setBarText={updateSearch} placeholder="Search..."/>
          <EntryCards>
            {list.entries ? list.entries.map(entry => (
                  <CardWrapper key={list.id}>
                      <EntryCard 
                          listid={list.id}
                          id={entry.id}
                          title={entry.title}
                          location={entry.location}
                          rating={entry.rating}
                          notes={entry.notes}
                          date_created={entry.date_created}
                      />
                  </CardWrapper>
              )): null}
          </EntryCards>
      </PageWrapper>
  );
}

export default ListPage;