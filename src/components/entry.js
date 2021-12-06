/* This is a rectangular "Entry" Card component
- displayed on list page
- on Click redirect to entryDetail.js (EntryPage) */

import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
    display: flex;
    background-color: ${(props) => props.theme.colors.blue};
`;

export const EntryCard = ({id}) => {
    return (
        <a href={`/entry/${id}`}>
            <CardWrapper>
                This is a entry card within a list page
            </CardWrapper>
        </a>
    );
}