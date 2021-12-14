/* This is the Create/Update List Form page 2*/

import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { CategoryTag } from '../../components/catTag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { categories } from '../../data/filter-sort';

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

    svg {
        position: fixed;
        right: 0;
        margin: 1rem 1.2rem;
        font-size: 1.5rem;
        color: ${(props) => props.theme.colors.gray};
    }
`;

const Content = styled.div`
  padding: 3rem 1rem 1rem 1rem;
`;

const TextInput = styled.textarea`
  background-color: ${(props) => props.theme.colors.lightGray};
  padding: 1rem;
  border-radius: 15px;
  width: 80vw;
  border: 0px;
  font-size: 1.2rem;
`;

const InputWrap = styled.div`
  margin: 1rem auto 1rem auto;
  width: fit-content;
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

const Heading = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.gray};
`;

const SubHeading = styled.div`
  color: ${(props) => props.theme.colors.gray};
`;

const Categories = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 1rem 0rem;
`;

const Category = styled.div`
    margin: 0.3rem 0.2rem;
`;

const ListFormPage2 = ({
  prop1// add necessary attributes here
}) => {
  const [inputText, setInputText] = useState('');
  const [selectedCatName, setCatName] = useState("");
  const [selectedCatColor, setCatColor] = useState("");
  const [isComplete, setComplete] = useState(false);
  const navigate = useNavigate();

  const updateInput = async (input) => {
    setInputText(input);
  };

  const setSelectedCat = (category) => {
    setCatName(category.name)
    setCatColor(category.color)
    setComplete(true)
  };

  const clearSelectedCat = () => {
    setCatName("")
    setCatColor("")
    setComplete(false)
  };

  return (
  <PageWrapper>
    <BottomCard>
      <Title>Museums in NYC</Title>
      <FontAwesomeIcon onClick={() => navigate("/my-lists/")}icon={faTimes}/>
      <Content>
        <Heading>Choose a category</Heading>
        <SubHeading>Add one category that best describes your list</SubHeading>
        {selectedCatName === "" ? <Categories>
          {categories.map(category => (
            <Category onClick={() => setSelectedCat(category)}>
              <CategoryTag text={category.name} color={category.color}/>
            </Category>
          ))}
        </Categories> : 
        <Categories>
          <Category onClick={() => clearSelectedCat()}>
            <CategoryTag text={selectedCatName} color={selectedCatColor}/>
          </Category>
        </Categories>}
        <Heading>Description (Optional)</Heading>
        <InputWrap><TextInput value={inputText} onChange={(e) => updateInput(e.target.value)} type="text" placeholder="Write a description..."></TextInput></InputWrap>
      </Content>
      {!isComplete ? 
      <Button><CategoryTag text="Next" color="#ffffff" textColor="#7A7A7A"/></Button> 
      : <ButtonActive><a href="/list-form/2"><CategoryTag text="Next" color="#FFBE0C"/></a></ButtonActive>}
    </BottomCard>
  </PageWrapper>
  );
}

export default ListFormPage2;