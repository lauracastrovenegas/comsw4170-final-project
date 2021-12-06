/* This is a square "List" Card component
- displayed on my lists page and discover page
- on Click redirect to list.js (ListPage) */

import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
    display: flex;
    background-color: ${(props) => props.theme.colors.blue};
`;

export const ListCard = ({id}) => {
    return (
        <a href={`/list/${id}`}>
            <CardWrapper>
                This is a list card
            </CardWrapper>
        </a>
    );
}