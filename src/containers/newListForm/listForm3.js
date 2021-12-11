/* This is the Create/Update List Form page 2*/

import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { CategoryTag } from '../../components/catTag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { CollaboratorIcon } from '../../components/collaborator';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const PageWrapper = styled.div`
    position: absolute;
    top: 0;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    background-image: url(https://list-it.s3.amazonaws.com/Rectangle+41.png);
    background-position: top;
    background-repeat: repeat;
    background-size: 120vw;
    margin-top: -1rem;
`;

const BottomCard = styled.div`
    background-color: ${(props) => props.theme.colors.fullWhite};
    border-radius: 15px 15px 0px 0px;
    height: fit-content;
    width: 100vw;
    position: fixed;
    bottom:0;
    right: 0;
`;

const Content = styled.div`
  padding: 3rem 1rem 1rem 1rem;
`;

const CloseIcon = styled.div`
  position: fixed;
  right: 0;
  margin: 1rem 1.2rem;
  width: fit-content;
  svg {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.gray};
  }
`;

const ToggleIcon = styled.div`
  margin: 1rem 0rem;
  width: fit-content;
  svg {
    font-size: 2.5rem;
    color: ${(props) => props.theme.colors.gray};
  }
`;

const GlobeIcon = styled.div`
  margin: auto 1rem;
  width: fit-content;
  svg {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.gray};
  }
`;

const AddIcon = styled.div`
  margin: auto 1rem;
  padding 1rem 0rem;
  width: fit-content;
  svg {
    font-size: 1.5rem;
    color: #5451F6;
  }
`;

const Row = styled.div`
  display: flex;
`;

const Collaborators = styled.div`
  display: flex;
  margin: 0.5rem 0rem;
`;

const Title = styled.div`
  padding: 1rem;
  font-size: 1.8rem;
  margin-top: -4rem;
  color: ${(props) => props.theme.colors.fullWhite};
  font-weight: 600;
  text-shadow: 0.5px 0.5px ${(props) => props.theme.colors.gray};
`;

const ButtonActive = styled.div`
  a {
    text-decoration: none;
  }
  width: fit-content;
  border-radius: 30px;
  margin: 0rem 1rem 1rem auto;
  font-size: 1.2rem;
`;

const Heading = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.gray};
`;

const SubHeading = styled.div`
  color: ${(props) => props.theme.colors.gray};
`;

const ListFormPage3 = ({
  prop1// add necessary attributes here
}) => {
  const [switchState, setSwitch] = useState(false)
  const [addCollab, setAddCollab] = useState(false);
  const navigate = useNavigate();

  const toggleSwitch = () => {
    setSwitch(!switchState)
  };

  return (
  <PageWrapper>
    <BottomCard>
      <Title>Museums in NYC</Title>
      <CloseIcon><FontAwesomeIcon onClick={() => navigate("/my-lists/")}icon={faTimes}/></CloseIcon>
      <Content>
        <Heading>Make This List Public</Heading>
        <SubHeading>Your list is currently private. Only you and your collaborators can view it.</SubHeading>
        {!switchState ? 
        <Row>
          <ToggleIcon onClick={() => toggleSwitch()}><FontAwesomeIcon icon={faToggleOff}/></ToggleIcon>
          <GlobeIcon><FontAwesomeIcon icon={faLock}/></GlobeIcon>
        </Row> : 
        <Row>
          <ToggleIcon onClick={() => toggleSwitch()}><FontAwesomeIcon icon={faToggleOn} style={{ color: '#739AF2' }}/></ToggleIcon>
          <GlobeIcon><FontAwesomeIcon icon={faGlobeAmericas} style={{ color: '#739AF2' }}/></GlobeIcon>
        </Row>}
        <Heading>Add Collaborators</Heading>
        <Collaborators>
          {addCollab ? <CollaboratorIcon imageURL="https://list-it.s3.amazonaws.com/lily-banse--YHSwy6uqvk-unsplash.jpg" onClick={() => setAddCollab(!addCollab)}/>: null}
          <AddIcon onClick={() => setAddCollab(true)}><FontAwesomeIcon icon={faPlus}/></AddIcon>
        </Collaborators>
      </Content>
      <ButtonActive><a href="/my-lists/"><CategoryTag text="ListIt!" color="#FFBE0C"/></a></ButtonActive>
    </BottomCard>
  </PageWrapper>
  );
}

export default ListFormPage3;