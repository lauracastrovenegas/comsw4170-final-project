/* This is a generic "Entry" details page */

import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { myLists } from '../data/myLists';

const PageWrapper = styled.div`

`;

const EntryPage = ({}) => {
  const { listid, entryid } = useParams();
  const [searchBarText, setSearchBarText] = useState('');
  const [entry, setEntry] = useState({});

  useEffect(() => {
    setEntry(fetchEntry(listid, entryid))
  }, []);

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
        {entry.title ?
         (<div>
          <div>{entry.title}</div>
          <div>{entry.location}</div>
          <div>{entry.notes}</div>
         </div>): null}
      </PageWrapper>
  );
}

export default EntryPage;