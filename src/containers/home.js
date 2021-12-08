/* This is the Home Page */

import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const PageWrapper = styled.div`
  padding: 1rem 1rem 4.5rem 1rem;
`;

const Title = styled.div`
  font-size: 2rem;
  margin: 1rem;
`;


const HomePage = () => {

  return (
      <PageWrapper>
        <Title>Home</Title>
      </PageWrapper>
  );
}

export default HomePage;