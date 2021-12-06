/* This is a rectangular "Entry" Card component
- displayed on list page
- on Click redirect to entryDetail.js (EntryPage) */

import React from "react";
import styled from "styled-components";

const Card = styled.div`
    a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.white};
    }
`;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
    background-color: ${(props) => props.theme.colors.blue};
`;

export const EntryCard = ({listid, id, title, location, rating, notes, date_created}) => {
    return (
        <Card>
        <a href={`/list/${listid}/${id}`}>
            <CardWrapper>
                <div>{title}</div>
                <div>{rating}</div>
            </CardWrapper>
        </a>
        </Card>
    );
}