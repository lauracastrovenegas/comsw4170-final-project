/* This is a rectangular "Entry" Card component
- displayed on list page
- on Click redirect to entryDetail.js (EntryPage) */

import React from "react";
import styled from "styled-components";
import { RateComponent } from "./rateComponent";

const Card = styled.a`
    text-decoration: none;
    color: ${(props) => props.theme.colors.black};
    width: fit-content;
`;

const CardWrapper = styled.div`
    padding: 1.2rem;
    display: flex;
    flex-direction: row;
    background-color: ${(props) => props.theme.colors.fullWhite};
    border-top: 0.5px solid ${(props) => props.theme.colors.lightGray};
`;

const Title = styled.div`
    white-space: nowrap;
    overflow: hidden;
    display: block;
    text-overflow: ellipsis;
    font-size: 1.2rem;
`;

const RateWrapper = styled.div`
    margin-left: auto;
`;

export const EntryCard = ({listid, id, title, location, notes, date_created, reaction, isPinned}) => {
    return (
        <Card href={`/list/${listid}/${id}`}>
            <CardWrapper>
                <Title>{title}</Title>
                <RateWrapper><RateComponent rate={2}/></RateWrapper>
            </CardWrapper>
        </Card>
    );
}