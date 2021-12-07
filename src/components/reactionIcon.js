/* Reaction Icon */

import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas, faSmile } from '@fortawesome/free-solid-svg-icons'
import { faMeh } from '@fortawesome/free-solid-svg-icons'
import { faFrown } from '@fortawesome/free-solid-svg-icons'

const IconWrapper = styled.div`
    margin: auto 1rem auto 0rem;
`;
const Icon = styled.div`
    color: ${props => props.color};
    svg {
        font-size: 2rem;
    }
`;

export const ReactionIcon = ({
    reaction
}) => { 

    const Reaction = () => {
        if (reaction === "happy"){
            return <FontAwesomeIcon icon={faSmile}/>
        } else if (reaction === "sad"){
            return <FontAwesomeIcon icon={faFrown}/>
        } else if (reaction === "meh"){
            return <FontAwesomeIcon icon={faMeh}/>
        } else {
            return null;
        }
    };

    const setColor = () => {
        if (reaction === "happy"){
            return "#43aa8b";
        } else if (reaction === "sad"){
            return "#f94144"
        } else if (reaction === "meh"){
            return "#f9c74f";
        } else {
            return "";
        }
    };

    return (
        <IconWrapper>
            <Icon color={setColor()}><Reaction/></Icon>
        </IconWrapper>
    );
}