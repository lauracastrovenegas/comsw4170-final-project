/* This is a square "List" Card component
- displayed on my lists page and discover page
- on Click redirect to list.js (ListPage) */

import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { PublicIcon } from "./publicIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faGlobe, faLink, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { RateComponent } from "./rateComponent";

const CardWrapper = styled.div`
    border: 0.5px solid ${(props) => props.theme.colors.lightGray};
    border-radius: 15px;
    padding: 1rem;
`;

const Content = styled.div`
    display: flex;
    margin-top: 0.5rem;
`;

const Header = styled.div`
    display: flex;
`;

const UserImage = styled.div`
    img {
        width: 2rem;
        height: 2rem;
        border-radius: 40px;
        object-fit: cover;
        margin-right: 0.5rem;
    }
`;

const HeaderText = styled.div`
    display: flex;
`;

const UserName = styled.text`

`;

const ListTitle = styled.div`
   
`;

const Image = styled.div`
    img {
        width: 6rem;
        height: 6rem;
        border-radius: 15px;
        object-fit: cover;
    }
`;

const Info = styled.div`
    margin-left: 1rem;
   
`;

const InfoTitle = styled.div`
    display: flex;
   
`;

const EntryTitle = styled.div`
   
`;

const Rate = styled.div`
    margin: 0.25rem 0rem;
`;

const Description = styled.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    font-size: 0.8rem;
`;

const Icon = styled.div`
  margin: auto auto auto 0.5rem;
  svg {
    color: #C4B9FA;
    font-size: 0.8rem;
  }
`;

const Globe = styled.div`
    svg {
        color: ${(props) => props.theme.colors.gray};
        font-size: 0.8rem;
    }
    margin: auto 0.5rem;
    width: fit-content;
`;

const BlankCard = styled.div`
  
`;

export const UpdateCard = ({user_name, user_image, list_title, entry_title, image_URL, rate, hasLink, hasLocation, notes}) => {
    return (
        <CardWrapper>
            <Header>
                <UserImage><img src={user_image}/></UserImage>
                <HeaderText>
                    <UserName>{user_name} updated {list_title}</UserName> 
                    <ListTitle></ListTitle>
                </HeaderText>
            </Header>
                <Content>
                    <Image><img src={image_URL}/></Image>
                    <Info>
                        <InfoTitle>
                            <EntryTitle>{entry_title}</EntryTitle>
                            {hasLink ? <Icon><FontAwesomeIcon icon={faLink}/></Icon> : null}
                            {hasLocation ? <Icon><FontAwesomeIcon icon={faMapMarkerAlt}/></Icon> : null}
                        </InfoTitle>
                        <Rate><RateComponent rate={rate}/></Rate>
                        <Description>{notes}</Description>
                    </Info>
                </Content>
        </CardWrapper>
    );
}