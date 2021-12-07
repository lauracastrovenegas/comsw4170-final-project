/* This is a square "List" Card component
- displayed on my lists page and discover page
- on Click redirect to list.js (ListPage) */

import React from "react";
import styled from "styled-components";

const CardWrapper = styled.a`
    text-decoration: none;
    color: black;
`;

const Card = styled.div`
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.fullWhite};
    border-radius: 7px;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.10);
    border: 0px;
`;

export const ListCard = ({id, category, title, date_created}) => {
    return (
        <CardWrapper href={`/list/${id}`}>
            <Card>
                <div>{title}</div>
                <div>{category}</div>
                <div>{date_created}</div>
            </Card>
        </CardWrapper>
    );
}