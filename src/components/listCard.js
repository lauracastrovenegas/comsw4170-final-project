/* This is a square "List" Card component
- displayed on my lists page and discover page
- on Click redirect to list.js (ListPage) */

import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
    border: 2px solid ${(props) => props.theme.colors.gray};
    margin: 0.5rem;
    
    a {
        text-decoration: none;
        color: black;
    }
`;

const Card = styled.div`

`;

export const ListCard = ({id, category, title, date_created}) => {
    return (
        <CardWrapper>
        <a href={`/list/${id}`}>
            <Card>
                <div>{title}</div>
                <div>{category}</div>
                <div>{date_created}</div>
            </Card>
        </a>
        </CardWrapper>
    );
}