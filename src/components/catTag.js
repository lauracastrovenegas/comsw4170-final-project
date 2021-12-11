/* Add Float Button */

import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-regular-svg-icons'
import theme from "../theme";

const Wrapper = styled.div`
    background-color: ${(props) => props.color};
    padding: 0.5rem 0.9rem;
    border-radius: 30px;
    width: fit-content;
`;
const Text = styled.div`
    color: ${(props) => props.color};
    font-weight: 700;
`;

export const CategoryTag = ({
    text,
    color,
    textColor
}) => {

    return (
        <Wrapper color={color}>
            <Text color={textColor ? textColor : "#ffffff"}>{text}</Text>
        </Wrapper>
    );
}