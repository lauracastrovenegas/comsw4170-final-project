/* This is a square "List" Card component
- displayed on my lists page and discover page
- on Click redirect to list.js (ListPage) */

import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { PublicIcon } from "./publicIcon";

const CardWrapper = styled.a`
    text-decoration: none;
    color: black;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.fullWhite};
    border-radius: 15px;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.10);
    border: 0px;
    height: 6.5rem;

    img {
        border-radius: 15px;
        object-fit: cover;
        height:100%;
    }
`;

const Name = styled.a`
    white-space: nowrap;
    overflow: hidden;
    display: block;
    text-overflow: ellipsis;
    padding: 0.5rem 0rem 0.25rem 0.25rem;
    font-size: 1rem;
    font-weight: 600;
`;

const IconWrapper = styled.div`
    z-index: 1; 
  position: relative; 
  bottom: 2.5rem; 
  margin: 0rem 0.5rem 0rem auto;
  width: fit-content;
`;

export const ListCard = ({id, category, title, date_created, isPinned, imageURL, isPublic}) => {
    return (
        <CardWrapper href={`/list/${id}`}>
            <Card>
                <img src={imageURL}></img>
                {isPublic ? <IconWrapper><PublicIcon/></IconWrapper> : null }
            </Card>
            <Name>{title}</Name>
        </CardWrapper>
    );
}