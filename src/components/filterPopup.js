/* This is the bottom pop up filters component
- displayed on discovery page and my lists page */

import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    background-color: ${(props) => props.theme.colors.blue};
`;

export const FilterPopUp = ({
    options, // add any props necesary
    submitFilters // function that updates the List being shown 
                // ( function defined in parent component, passed here 
                // and called once aubmit button clicked to update parent container)
}) => {
    return (
            <Wrapper>
                This is a bottom popup filter component
            </Wrapper>
    );
}