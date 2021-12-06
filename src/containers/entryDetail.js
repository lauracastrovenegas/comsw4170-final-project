/* This is a generic "Entry" details page */

import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const PageWrapper = styled.div`

`;

const EntryPage = ({
  // add necessary attributes here
  title,
  reaction, 
  description
}) => {

  return (
      <PageWrapper>
         This is an entry
      </PageWrapper>
  );
}

export default EntryPage;