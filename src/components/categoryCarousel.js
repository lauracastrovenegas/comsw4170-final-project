/* This is the category horizontal scroll carousel component
- displayed on discovery page
- uses List Cards */

import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    background-color: ${(props) => props.theme.colors.blue};
`;

export const CategoryCarousel = ({
    category, // name of category (could be an object with more info)
    lists // array of lists
}) => {
    return (
            <Wrapper>
                This is a carousel for a category
            </Wrapper>
    );
}