/* This is a generic "Entry" details page */

import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { myLists } from '../data/myLists';
import { BackButton } from '../components/backBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { RateComponent } from '../components/rateComponent';
import { LinkPreview } from '../components/linkPreview';

const PageWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.fullWhite};
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const TopContainer = styled.div`
  flex: 1 1 auto;
  background-image: url(${props => props.imageurl});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  min-height: 35vh;
  margin-bottom: -2rem;
`;

const ContentContainer = styled.div`
  flex: 0 1 auto;
  max-height: fit-content;
  bottom: 0rem;
  background-color: ${(props) => props.theme.colors.fullWhite};
  border-radius: 15px 15px 0px 0px;
  width: 100vw;
`;

const Content = styled.div`
  padding-top: 1.5rem;
  overflow: scroll;
  max-height: 60vh;
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

const Title = styled.div`
  margin: 0rem 1.5rem 1rem 1.5rem;
  font-size: 2rem;
  font-weight: 600;
  text-overflow: wrap;
  display: block;
`;

const Location = styled.div`
  margin: 1rem 0rem;
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

const Link = styled.div`
  margin: 1.5rem 0rem;
`;

const NotesBox = styled.div`
  margin: 0rem 0rem;
  background-color: ${(props) => props.theme.colors.lightGray};
  padding: 1.5rem;
  border-radius: 15px;
  margin-bottom: 3rem;
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

const EntryPage = ({showNav}) => {
  const { listid, entryid } = useParams();
  const [searchBarText, setSearchBarText] = useState('');
  const [entry, setEntry] = useState({});
  const [list, setList] = useState({});

  useEffect(() => {
    setList(fetchList(listid))
    setEntry(fetchEntry(listid, entryid))
    showNav(false)
  }, []);

  const fetchList = (listid) => {
    return myLists.find((element) => {
      return element.id === listid;
    })
  }

  const fetchEntry = (listid, entryid) => {
    const list = myLists.find((element) => {
      return element.id === listid;
    })
    
    return list.entries.find((element) => {
      return element.id === entryid;
    })
  };

  return (
      <PageWrapper>
        <BackButtonBox>
           <BackButton onClick={() => showNav(true)} text={list.title} route={`/list/${listid}`} textColor="white"/>
        </BackButtonBox>
        <OptionsButton><FontAwesomeIcon icon={faEllipsisV}/></OptionsButton>
        <TopContainer imageurl={entry.photos ? entry.photos[0] : list.image_URL}/>
        <ContentContainer>
          <Content>
            <Title>{entry.title}</Title>
            {entry.rate ? <Rate><RateComponent rate={entry.rate}/></Rate> : null}
            {entry.location ? <Section><Location>{entry.location}</Location></Section>:null}
            {entry.photos ? 
            <Section>
              <SectionTitle>Photos</SectionTitle>
              <Photos>
                {entry.photos.map(photo => (
                    <Photo>
                      <img src={photo}/>
                    </Photo>
                ))}
              </Photos>
            </Section> : null}
            {entry.link ? <Section><SectionTitle>Link</SectionTitle><LinkPreview url={entry.link}/></Section>:null}
            {entry.notes ? 
            <Section>
              <SectionTitle>Notes</SectionTitle>
              <NotesBox>{entry.notes}</NotesBox>
            </Section>:null}
          </Content>
        </ContentContainer>
      </PageWrapper>
  );
}

export default EntryPage;