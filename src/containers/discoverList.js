/* This is a generic "List" page with a list of entries - From Discover */

import React from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import SearchFilterBox from '../components/searchFilterBox';
import { discover_lists } from '../data/discover_lists';
import { EntryCard } from '../components/entryCard';
import { BackButton } from '../components/backBtn';
import { AddButton } from '../components/addFloatButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const PageWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.fullWhite};
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const TopContainer = styled.div`
  flex: 1 1 auto;
  background-image: url(${props => props.imageurl});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  min-height: 35vh;
  margin-bottom: -2rem;
`;

const ContentContainer = styled.div`
  flex: 0 1 auto;
  max-height: fit-content;
  padding-top: 1rem;
  bottom: 0rem;
  background-color: ${(props) => props.theme.colors.fullWhite};
  border-radius: 15px 15px 0px 0px;
  width: 100vw;
`;

const BackButtonBox = styled.div`
  position: absolute; 
  top: 0rem; 
  left: 1rem;
  width: fit-content;
`;

const OptionsButton = styled.div`
  position: absolute; 
  top: 0rem; 
  right: 1.2rem;
  width: fit-content;
  svg {
    margin-top: 1rem;
    color: ${(props) => props.theme.colors.fullWhite};
  }
`;

const EntryCards = styled.div`
  margin: 1rem;
  border-width: 1px 2px 2px 2px;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.lightGray};
  border-radius: 15px;
  overflow: scroll;
  max-height: 45vh;
  ::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
  }
`;

const CardWrapper = styled.div`
    
`;

const Title = styled.div`
  padding: 1rem;
  font-size: 2rem;
  margin-top: 22vh;
  color: ${(props) => props.theme.colors.fullWhite};
  font-weight: 600;
  white-space: nowrap;
    overflow: hidden;
    display: block;
    text-overflow: ellipsis;
  text-shadow: 0.5px 0.5px ${(props) => props.theme.colors.gray};
`;

const AddButtonWrapper = styled.div`
  z-index: 1; 
  position: absolute; 
  bottom: 5.5rem; 
  right: 0rem;
`;

const DiscoverListPage = ({
  title, // title of specific list
  category, // category of list
  entries // array of entries in list
  // add more props as needed
}) => {
  const { catid, listid } = useParams();
  const [searchBarText, setSearchBarText] = useState('');
  const [list, setList] = useState({});

  useEffect(() => {
    setList(fetchList(catid, listid))
  }, []);

  const fetchList = (catid, listid) => {
    const category = discover_lists.find((element) => {
      return element.id === catid;
    })
    
    return category.lists.find((element) => {
      return element.id === listid;
    })
  };

  const updateSearch = async (input) => {
    setSearchBarText(input);
  };

  return (
      <PageWrapper>
        <BackButtonBox>
          <BackButton text="Discover" route={`/`} textColor="white"/>
        </BackButtonBox>
        <OptionsButton><FontAwesomeIcon icon={faEllipsisV}/></OptionsButton>
        <TopContainer imageurl={list.image_URL}>
          <Title>{list.title}</Title>
        </TopContainer>
        <ContentContainer>
          <SearchFilterBox barText={searchBarText} setBarText={updateSearch} placeholder="Search List..." margin="1.3"/>
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
                          isPinned={entry.isPinned}
                      />
                  </CardWrapper>
              )): null}
          </EntryCards>
          <AddButtonWrapper><AddButton route="/entry-form/"/></AddButtonWrapper>
        </ContentContainer>
      </PageWrapper>
  );
}

export default DiscoverListPage;