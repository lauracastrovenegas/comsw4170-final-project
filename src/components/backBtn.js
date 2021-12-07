/* Generic Back Button */

import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.a`
    display: flex;
    width: fit-content;
    padding: 1rem 0rem;
    text-decoration: none;
    color: black;
    border-radius: 7px;
    :active {
        background-color: none;
    }
`;
const Icon = styled.div`
    padding: 0rem 0.5rem;
`;
const Text = styled.div`
    margin: auto 0.2rem;
`;

export const BackButton = ({
    text, // text of button
    route // route
}) => {
    return (
        <Wrapper href={route}>
            <Icon><FontAwesomeIcon icon={faChevronLeft}/></Icon>
            <Text>{text}</Text>
        </Wrapper>
    );
}