/* This is the Create/Update List Form page 1*/

import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { CategoryTag } from '../../components/catTag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const PageWrapper = styled.div`
    position: absolute;
    bottom: 0;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    background-image: url(https://list-it.s3.amazonaws.com/Rectangle+39.png);
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
`;

const BottomCard = styled.div`
    background-color: ${(props) => props.theme.colors.fullWhite};
    border-radius: 15px 15px 0px 0px;
    height: fit-content;
    width: 100vw;
    position: fixed;
    bottom:0;
    right: 0;

    svg {
        position: fixed;
        right: 0;
        margin: 1rem 1.2rem;
        font-size: 1.5rem;
        color: ${(props) => props.theme.colors.gray};
    }
`;

const Content = styled.div`
  padding: 1rem;
`;

const TextInput = styled.input`
  background-color: ${(props) => props.theme.colors.lightGray};
  padding: 1rem;
  border-radius: 15px;
  width: 70vw;
  border: 0px;
  font-size: 1.2rem;
`;

const InputWrap = styled.div`
  margin: 2.5rem auto 1rem auto;
  width: fit-content;
`;

const Title = styled.div`
  padding: 1rem;
  font-size: 1.8rem;
  margin-top: -4rem;
  color: ${(props) => props.theme.colors.fullWhite};
  font-weight: 600;
`;

const Image = styled.div`
    width: fit-content;
    margin: 2rem auto 1rem auto;
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

const Button = styled.div`
  border: 0.5px solid ${(props) => props.theme.colors.gray};
  color: ${(props) => props.theme.colors.gray};
  width: fit-content;
  border-radius: 30px;
  margin: 0rem 1rem 1rem auto;
  font-size: 1.2rem;
`;

const ListFormPage1 = ({
  prop1// add necessary attributes here
}) => {
  const [image, setImage] = useState("https://list-it.s3.amazonaws.com/Group+47.png");
  const [inputText, setInputText] = useState('');
  const navigate = useNavigate();

  const updateInput = async (input) => {
    setInputText(input);
  };

  return (
  <PageWrapper>
    <BottomCard>
      <Title>Create a New List</Title>
      <FontAwesomeIcon onClick={() => navigate("/my-lists/")}icon={faTimes}/>
      <Content>
        <InputWrap><TextInput value={inputText} onChange={(e) => updateInput(e.target.value)} type="text" placeholder="Title Your List..."></TextInput></InputWrap>
        <Image onClick={() => setImage("https://list-it.s3.amazonaws.com/Rectangle+41.png")}>
          <img src={image}/>
        </Image>

      </Content>
      {image === "https://list-it.s3.amazonaws.com/Group+47.png" ? 
      <Button><CategoryTag text="Next" color="#ffffff" textColor="#7A7A7A"/></Button> 
      : <ButtonActive><a href="/list-form/1"><CategoryTag text="Next" color="#FFBE0C"/></a></ButtonActive>}
      
    </BottomCard>
  </PageWrapper>
  );
}

export default ListFormPage1;