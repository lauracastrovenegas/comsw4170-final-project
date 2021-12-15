/* This is the main My Lists Page */

import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { ListCard } from '../components/listCard';
import { ListCardSimple } from '../components/listCardListView';
import { myLists } from '../data/myLists';
import { AddButton } from '../components/addFloatButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import SearchFilterBox from '../components/searchFilterBox';
import { FilterPopUp } from '../components/filterPopup';


const PageWrapper = styled.div`
  
`;

const Content = styled.div`
  padding: 1rem 1rem 0rem 1rem;
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

const ProfileIcon = styled.div`
  margin: auto 0.5rem auto auto;
  svg {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.gray};
  }
`;

const ListCardsGrid = styled.div`
  margin: 0rem auto;
  padding-bottom: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
  max-height: 72vh;
  ::-webkit-scrollbar {
    width: 0; 
    background: transparent;
  }
`;

const ListCardsList = styled.div`
  margin: 0.5rem;
  border-width: 1px 2px 2px 2px;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.lightGray};
  border-radius: 15px;
  overflow: scroll;
  max-height: 70vh;
`;

const CardWrapperGrid = styled.div`
  flex-grow: 1;
  max-width: 45%;
  margin: 0.5rem;
`;

const CardWrapperList = styled.div`

`;

const AddButtonWrapper = styled.div`
  z-index: 1; 
  position: absolute; 
  bottom: 5.5rem; 
  right: 0rem;
`;

const MyLists = () => {
  const [searchBarText, setSearchBarText] = useState('');
  const [isOpen, setOpen] = useState(false);
  const [currView, setCurView] = useState("grid");

  const updateSearch = async (input) => {
    setSearchBarText(input);
  };

  const toggleFilters = () => {
    setOpen(!isOpen)
  }

  const toggleView = (view) => {
    setCurView(view)
  }

  return (
    <PageWrapper>
      <Content>
      <Header>
        <Title>ListIt!</Title>
        <ProfileIcon><FontAwesomeIcon icon={faUserCircle}/></ProfileIcon>
      </Header>
      <SearchFilterBox enableToggleView={true} toggleView={toggleView} toggleFilter={toggleFilters} barText={searchBarText} setBarText={updateSearch} placeholder="Search Your Lists..." margin="0.5"/>
      {currView === "grid" ? 
        <ListCardsGrid>
          {myLists.map(list => (
                <CardWrapperGrid key={list.id}>
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
                </CardWrapperGrid>
            ))}
        </ListCardsGrid> 
      : <ListCardsList>
          {myLists.map(list => (
                <CardWrapperList key={list.id}>
                    <ListCardSimple 
                        id={list.id}
                        title={list.title}
                        date_created={list.date_created}
                        category={list.category}
                        isPinned={list.isPinned}
                        imageURL={list.image_URL}
                        isPublic={list.isPublic}
                        currentRoute="My Lists"
                    />
                </CardWrapperList>
            ))}
            <ListCardSimple blank={true}/>
        </ListCardsList> }
      <AddButtonWrapper><AddButton route="/list-form/"/></AddButtonWrapper>
      </Content>
      <FilterPopUp showCategories={true} closePopup={toggleFilters} isOpen={isOpen}/>
    </PageWrapper>
  );
}

export default MyLists;
