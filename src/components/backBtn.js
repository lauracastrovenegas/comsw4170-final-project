/* Generic Back Button */

import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.button`
    display: flex;
    width: fit-content;
    padding: 1rem 0rem;
    border-radius: 7px;
    border: 0px solid black;
    background-color: transparent;
    font-size: 1rem;
    color: ${props => props.textColor};
    text-shadow: 0.5px 0.5px ${(props) => props.theme.colors.gray};
`;
const Icon = styled.div`
    padding: 0rem 0.5rem;
`;
const Text = styled.div`
    margin: auto 0.2rem;
`;

export const BackButton = ({
    text, // text of button
    textColor,
    route, // route
    isSpecial
}) => {
    const navigate = useNavigate();

    return (
        <>
        {isSpecial ? 
            <Wrapper textColor={textColor}>
            <Icon><FontAwesomeIcon icon={faChevronLeft}/></Icon>
            <Text>{text}</Text>
            </Wrapper>
        :   <Wrapper onClick={() => navigate(-1)} textColor={textColor}>
            <Icon><FontAwesomeIcon icon={faChevronLeft}/></Icon>
            <Text>{text}</Text>
            </Wrapper>}
        </>
    );
}