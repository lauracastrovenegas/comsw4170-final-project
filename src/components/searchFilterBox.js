import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SortIcon } from './sortIcon';
import SearchBar from './searchBar';

const SearchBox = styled.div`
  display: flex;
`;

const Icon = styled.i`
  margin-right: ${props => props.margin}rem;
  display: flex;
`;

const SearchFilterBox = ({
  barText,
  setBarText,
  placeholder,
  margin,
  toggleFilter
}) => {
    return (
        <SearchBox>
          <SearchBar barText={barText} setBarText={setBarText} placeholder={placeholder}/>
          <Icon margin={margin} onClick={() => toggleFilter()}><SortIcon/></Icon>
        </SearchBox>
    )
};

export default SearchFilterBox;