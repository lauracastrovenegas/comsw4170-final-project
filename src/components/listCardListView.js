/* This is a square "List" Card component
- displayed on my lists page and discover page
- on Click redirect to list.js (ListPage) */

import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { PublicIcon } from "./publicIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faGlobe } from "@fortawesome/free-solid-svg-icons";

const CardWrapper = styled.a`
    text-decoration: none;
    color: black;
    display: flex;
    flex-direction: row;
    border-top: 0.5px solid ${(props) => props.theme.colors.lightGray};
`;

const Content = styled.div`
    padding: 0.8rem 1rem;
`;

const Name = styled.div`
    white-space: nowrap;
    overflow: hidden;
    display: block;
    text-overflow: ellipsis;
    font-size: 1rem;
    font-weight: 500;
`;

const Title = styled.div`
    display: flex;
`;

const Date = styled.div`
    font-size: 0.8rem;
    padding-top: 0.2rem;
`;

const Icon = styled.div`
  margin: auto 1rem auto auto;
  svg {
    color: ${(props) => props.theme.colors.gray};
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
  height: 3rem;
`;

export const ListCardSimple = ({id, catid, category, title, date_created, isPinned, imageURL, isPublic, prevRoute, blank}) => {
    return (
        <>
        {blank ? 
            <BlankCard/>
        :  <CardWrapper href={`/list/${id}`}>
                <Content>
                    <Title>
                        <Name>{title}</Name>
                        {isPublic ? <Globe><FontAwesomeIcon icon={faGlobe}/></Globe>:null}
                    </Title>
                    <Date>Modified 4 days ago</Date>
                </Content>
                <Icon><FontAwesomeIcon icon={faEllipsisH}/></Icon>
            </CardWrapper>}
        </>
    );
}