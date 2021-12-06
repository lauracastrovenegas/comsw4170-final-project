import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBox = styled.div`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  margin: 0.5rem auto;
  width: fit-content;
`;

const Bar = styled.input`
  width: 80vw;
  padding-left: 3rem;
  border-radius: 7px;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.10);
  height: 39px;
  border: 0px;
  background-color: ${(props) => props.theme.colors.fullWhite};
  color: ${(props) => props.theme.colors.gray};
  font-weight: 500;
  font-size:18px;
  line-height:21px;

  ::placeholder {
      color: inherit;
  }
`;

const Icon = styled.i`
  position: absolute;
  margin: .7rem 1rem;
  color: ${(props) => props.theme.colors.gray};
`;

const SearchBar = ({
  barText,
  setBarText,
  placeholder
}) => {
    return (
        <SearchBox>
          <Icon><FontAwesomeIcon icon={faSearch} /></Icon>
          <Bar 
            key="search_text" 
            placeholder={placeholder}
            value={barText}
            onChange={(e) => setBarText(e.target.value)}
          ></Bar>
        </SearchBox>
    )
};

export default SearchBar;