/* This is a rectangular "Entry" Card component
- displayed on list page
- on Click redirect to entryDetail.js (EntryPage) */

import React from "react";
import styled from "styled-components";

const Card = styled.a`
    text-decoration: none;
    color: ${(props) => props.theme.colors.black};
    width: fit-content;
`;

const CardWrapper = styled.div`
    padding: 0.5rem;
    width: 87vw;
    display: flex;
    flex-direction: column;
    margin: 0.5rem auto;
    background-color: ${(props) => props.theme.colors.fullWhite};
    border-radius: 7px;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.10);
    border: 0px;
`;

export const EntryCard = ({listid, id, title, location, rating, notes, date_created}) => {
    return (
        <Card href={`/list/${listid}/${id}`}>
            <CardWrapper>
                <div>{title}</div>
                <div>{rating}</div>
            </CardWrapper>
        </Card>
    );
}