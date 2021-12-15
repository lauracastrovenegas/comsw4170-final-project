import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchBar from './searchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSlidersH, faThLarge } from '@fortawesome/free-solid-svg-icons';

const SearchBox = styled.div`
  display: flex;
`;

const S = styled.i`
`;

const Icon = styled.div`
  width: fit-content;
  svg {
      font-size: 1.3rem;
      color: ${(props) => props.theme.colors.gray};
  }
  width: fit-content;
  margin: auto ${props => props.margin}rem;
`

const SearchFilterBox = ({
  barText,
  setBarText,
  placeholder,
  margin,
  toggleFilter,
  enableToggleView,
  toggleView
}) => {
    const [curView, setCurView] = useState("grid");

    const updateView = (input) => {
      setCurView(input)
      toggleView(input)
    }

    return (
        <SearchBox>
          {enableToggleView ? 
            <SearchBar barText={barText} setBarText={setBarText} placeholder={placeholder} width="55"/> 
          : <SearchBar barText={barText} setBarText={setBarText} placeholder={placeholder} width="63"/> }
          {enableToggleView && curView == "list" ? 
            <Icon margin={margin} onClick={() => updateView("grid")}><FontAwesomeIcon icon={faThLarge}/></Icon>:null}
          {enableToggleView && curView == "grid" ? 
            <Icon margin={margin} onClick={() => updateView("list")}><FontAwesomeIcon icon={faListUl}/></Icon>:null}
          <Icon margin={margin} onClick={() => toggleFilter()}><FontAwesomeIcon icon={faSlidersH}/></Icon>
        </SearchBox>
    )
};

export default SearchFilterBox;