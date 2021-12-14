/* This is the Create/Update List Form page 2*/

import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { CategoryTag } from '../../components/catTag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BackButton } from '../../components/backBtn';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { RateComponent } from '../../components/rateComponent';
import { LinkPreview } from '../../components/linkPreview';

const PageWrapper = styled.div`
    position: absolute;
    top: 0;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    background-image: url(${props => props.imageurl});
    background-position: top center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: auto 45%;
`;

const BackButtonBox = styled.div`
  position: absolute; 
  top: 0rem; 
  left: 1rem;
  width: fit-content;
`;

const OptionsButton = styled.div`
  position: absolute; 
  top: 0rem; 
  right: 1.2rem;
  width: fit-content;
  svg {
    margin-top: 1rem;
    color: ${(props) => props.theme.colors.fullWhite};
  }
`;

const BottomCard = styled.div`
    background-color: ${(props) => props.theme.colors.fullWhite};
    border-radius: 15px 15px 0px 0px;
    height: fit-content;
    width: 100vw;
    position: fixed;
    bottom:0;
    right: 0;
    overflow: scroll;
    max-height: 61vh;
`;

const Content = styled.div`
  padding-top: 1.5rem;
`;

const Title = styled.div`
  margin: 0rem 1.5rem 1rem 1.5rem;
  font-size: 2rem;
  font-weight: 600;
  text-overflow: wrap;
  display: block;
`;

const Photos = styled.div`
  display: flex;
  overflow: scroll;
`;

const Photo = styled.div`
  img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    border-radius: 15px;
    margin-right: 1rem;
  }
`;

const AddPhotoIcon = styled.div`
  border-radius: 30px;
  width: 1.9rem;
  height: 2rem;
  margin: auto 0rem;
  background-color: #739AF2;
  svg {
    color: ${(props) => props.theme.colors.fullWhite};
    margin: 0.5rem;
  }
`;

const NotesBox = styled.textarea`
  background-color: ${(props) => props.theme.colors.lightGray};
  padding: 1.5rem;
  border-radius: 15px;
  margin-bottom: 1rem;
  height: 4rem;
  border: 0px;
  width: 80%;
  :focus {
    outline: none;
  }
`;

const Rate = styled.div`
  margin: 0rem 1.5rem;
`;

const SectionTitle = styled.div`
  font-size: 1.5rem;
  margin: 0.5rem 0rem;
  color: ${(props) => props.theme.colors.gray};
`;

const Section = styled.div`
  margin: 1rem 1.5rem;
`

const EntryFormPage2 = ({
  imageLink, // add necessary attributes here
  listTitle
}) => {
  const [inputText, setInputText] = useState('');
  const [photos, setPhotos] = useState([]);
  const [link, setLink] = useState("");
  const navigate = useNavigate();

  const updateInput = async (input) => {
    setInputText(input);
  };

  const addPhoto = (input) => {
    setPhotos([input]);
  };

  return (
  <PageWrapper imageurl={imageLink ? imageLink : "https://list-it.s3.amazonaws.com/Rectangle+39.png"}>
    <BackButtonBox onClick={() => navigate(-2)}>
      <BackButton isSpecial={true} text={listTitle} textColor="white"/>
    </BackButtonBox>
    <OptionsButton><FontAwesomeIcon icon={faEllipsisV}/></OptionsButton>
    <BottomCard>
      <Content>
      <Title>Call Me By Your Name</Title>
          <Rate><RateComponent rate={4}/></Rate>
              <Section>
                <SectionTitle>Photos</SectionTitle>
                <Photos>
                  {photos.map(photo => (
                      <Photo>
                        <img src={photo}/>
                      </Photo>
                  ))}
                  <AddPhotoIcon onClick={() => addPhoto("https://m.media-amazon.com/images/M/MV5BNDk3NTEwNjc0MV5BMl5BanBnXkFtZTgwNzYxNTMwMzI@._V1_FMjpg_UX1000_.jpg")}><FontAwesomeIcon icon={faPlus}/></AddPhotoIcon>
                </Photos>
              </Section> 
              <Section>
                <SectionTitle>Link</SectionTitle>
                <LinkPreview url=""/>
              </Section>
            <Section>
              <SectionTitle>Notes</SectionTitle>
              <NotesBox>{inputText}</NotesBox>
            </Section>
      </Content>
    </BottomCard>
  </PageWrapper>
  );
}

export default EntryFormPage2;