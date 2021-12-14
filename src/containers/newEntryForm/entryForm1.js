/* This is the Create/Update List Form page 1*/

import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { CategoryTag } from '../../components/catTag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { RateComponent } from '../../components/rateComponent';

const PageWrapper = styled.div`
    position: absolute;
    bottom: 0;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    background-image: url(${props => props.imageurl});
    background-position: top center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: auto 80%;
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
  padding: 2rem 2rem 1rem 2rem;
`;

const Close = styled.div`
  svg {
    position: fixed;
    right: 0;
    margin: 1rem 1.2rem;
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.gray};
  }
`

const TextInput = styled.input`
  background-color: ${(props) => props.theme.colors.fullWhite};
  border-radius: 15px;
  width: 100%;
  border: 0px;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.purple};

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${(props) => props.theme.colors.purple};
    opacity: 0.5; /* Firefox */
  }

  :focus {
    outline: none;
  }
`;

const InputWrap = styled.div`
  width: 90%;
  margin-top: 1rem;
`;

const Title = styled.div`
  padding: 1rem;
  font-size: 1.8rem;
  margin-top: -4rem;
  color: ${(props) => props.theme.colors.fullWhite};
  font-weight: 600;
`;

const Heading = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.gray};
  margin-top: 2rem;
`;

const Rate = styled.div`
    width: fit-content;
    margin: 0.5rem auto 1rem 0rem;
`;

const ButtonActive = styled.div`
  a {
    text-decoration: none;
  }
  width: fit-content;
  border-radius: 30px;
  margin: 0rem 1rem 1rem auto;
  font-size: 1.2rem;
  border: 0.5px solid ${(props) => props.theme.colors.fullWhite};
`;

const Button = styled.div`
  border: 0.5px solid ${(props) => props.theme.colors.gray};
  color: ${(props) => props.theme.colors.gray};
  width: fit-content;
  border-radius: 30px;
  margin: 0rem 1rem 1rem auto;
  font-size: 1.2rem;
`;

const EntryFormPage1 = ({
  imageLink// add necessary attributes here
}) => {
  const [inputText, setInputText] = useState('');
  const [next, setNext] = useState(false);
  const [rateSet, toggleRate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (inputText !== ""){
      setNext(true)
    } else {
      setNext(false)
    }
  }, [inputText]);

  const updateInput = async (input) => {
    setInputText(input);
  };

  return (
  <PageWrapper imageurl={imageLink ? imageLink : "https://list-it.s3.amazonaws.com/Rectangle+39.png"}>
    <BottomCard>
      <Title>Add An Entry</Title>
      <Close><FontAwesomeIcon onClick={() => navigate(-1)} icon={faTimes}/></Close>
      <Content>
        <InputWrap><TextInput value={inputText} onChange={(e) => updateInput(e.target.value)} type="text" placeholder="Title Your Entry..."></TextInput></InputWrap>
        <Heading>Rating (Optional)</Heading>
        {rateSet ? 
        <Rate onClick={() => toggleRate(!rateSet)}><RateComponent rate={4}/></Rate> :
        <Rate onClick={() => toggleRate(!rateSet)}><RateComponent rate={0}/></Rate>}
      </Content>
      {!next ? 
      <Button><CategoryTag text="Create" color="#ffffff" textColor="#7A7A7A"/></Button> 
      : <ButtonActive><Link to={`/entry-form/1`}><CategoryTag text="Create" color="#FFBE0C"/></Link></ButtonActive>}
    </BottomCard>
  </PageWrapper>
  );
}

export default EntryFormPage1;