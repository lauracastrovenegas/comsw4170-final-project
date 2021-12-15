import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBox = styled.div`
  margin: 0.5rem auto;
`;

const Bar = styled.input`
  min-width: ${props => props.width}vw;
  padding-left: 3rem;
  border-radius: 15px;
  height: 39px;
  border: 0px;
  color: ${(props) => props.theme.colors.gray};
  font-weight: 500;
  font-size:18px;
  line-height:21px;
  background-color: ${(props) => props.theme.colors.lightGray};

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
  placeholder,
  width
}) => {
    return (
        <SearchBox>
          <Icon><FontAwesomeIcon icon={faSearch} /></Icon>
          <Bar 
            key="search_text" 
            placeholder={placeholder}
            value={barText}
            onChange={(e) => setBarText(e.target.value)}
            width={width}
          ></Bar>
        </SearchBox>
    )
};

export default SearchBar;