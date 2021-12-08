/* This is the main My Lists Page */

import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import SearchBar from '../components/searchBar';
import { ListCard } from '../components/listCard';
import { myLists } from '../data/myLists';
import { AddButton } from '../components/addFloatButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { SortIcon } from '../components/sortIcon';


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
  color: ${(props) => props.theme.colors.blue};
`;

const ProfileIcon = styled.div`
  margin: auto 0.5rem auto auto;
  svg {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.gray};
  }
`;

const SearchBarBox = styled.div`
  display: flex;
`;

const TagIcon = styled.div`
  img {
    width: 1.5rem;
  }
  margin: auto 0.25rem;
`;

const Icons = styled.div`
  margin-left: auto;
  margin-right: 0.5rem;
  display: flex;
`

const ListCards = styled.div`
  margin: 0rem auto;
  padding-bottom: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
  max-height: 70vh;
  ::-webkit-scrollbar {
    width: 0; 
    background: transparent;
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
      <Header>
        <Title>ListIt!</Title>
        <ProfileIcon><FontAwesomeIcon icon={faUserCircle}/></ProfileIcon>
      </Header>
      <SearchBarBox>
        <SearchBar barText={searchBarText} setBarText={updateSearch} placeholder="Lists, Categories ..."/>
        <Icons>
          <TagIcon><img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-tag-interface-kiranshastry-lineal-kiranshastry.png"/></TagIcon>
          <SortIcon/>
        </Icons>
      </SearchBarBox>
      <ListCards>
        {myLists.map(list => (
              <CardWrapper key={list.id}>
                  <ListCard 
                      id={list.id}
                      title={list.title}
                      date_created={list.date_created}
                      category={list.category}
                      isPinned={list.isPinned}
                      imageURL={list.image_URL}
                      isPublic={list.isPublic}
                      currentRoute="My Lists"
                  />
              </CardWrapper>
          ))}
      </ListCards>
      <AddButtonWrapper><AddButton route="/list-form/"/></AddButtonWrapper>
    </PageWrapper>
  );
}

export default MyLists;
