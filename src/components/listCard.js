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
    background-color: ${(props) => props.theme.colors.fullWhite};
    border-radius: 15px;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.10);
    border: 0px;
    height: 6.5rem;
    background-image: url("${(props) => props.image}");
    background-size: cover;
    background-position: center;
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
  margin: auto 0.5rem 0.5rem auto;
  width: fit-content;
`;

export const ListCard = ({id, catid, category, title, date_created, isPinned, imageURL, isPublic, prevRoute}) => {
    return (
        <CardWrapper href={(prevRoute === 'Discover')? `/discover/${catid}/${id}`:`/list/${id}`}>
            <Card image={imageURL}>
                {isPublic ? <IconWrapper><PublicIcon/></IconWrapper> : null }
            </Card>
            <Name>{title}</Name>
        </CardWrapper>
    );
}