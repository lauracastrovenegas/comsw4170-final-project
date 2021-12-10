import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SortIcon } from './sortIcon';
import SearchBar from './searchBar';

const SearchBox = styled.div`
  display: flex;
`;

const Icon = styled.div`
  margin-right: ${props => props.margin}rem;
  display: flex;
`;

const SearchFilterBox = ({
  barText,
  setBarText,
  placeholder,
  margin
}) => {
    return (
        <SearchBox>
          <SearchBar barText={barText} setBarText={setBarText} placeholder={placeholder}/>
          <Icon margin={margin}><SortIcon/></Icon>
        </SearchBox>
    )
};

export default SearchFilterBox;