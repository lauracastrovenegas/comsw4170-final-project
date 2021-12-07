/* This is a generic "Entry" details page */

import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { myLists } from '../data/myLists';
import { BackButton } from '../components/backBtn';

const PageWrapper = styled.div`
  padding: 1rem;
`;

const Content = styled.div`
  margin: 1rem;
`;

const EntryPage = ({}) => {
  const { listid, entryid } = useParams();
  const [searchBarText, setSearchBarText] = useState('');
  const [entry, setEntry] = useState({});
  const [list, setList] = useState({});

  useEffect(() => {
    setList(fetchList(listid))
    setEntry(fetchEntry(listid, entryid))
  }, []);

  const fetchList = (listid) => {
    return myLists.find((element) => {
      return element.id === listid;
    })
  }

  const fetchEntry = (listid, entryid) => {
    const list = myLists.find((element) => {
      return element.id === listid;
    })
    
    return list.entries.find((element) => {
      return element.id === entryid;
    })
  };

  return (
      <PageWrapper>
        <BackButton text={list.title} route={`/list/${listid}`}/>
        <Content>
          {entry.title ?
          (<div>
            <div>{entry.title}</div>
            <div>{entry.location}</div>
            <div>{entry.notes}</div>
          </div>): null}
         </Content>
      </PageWrapper>
  );
}

export default EntryPage;