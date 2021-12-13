/* Add Float Button */

import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const IconWrapper = styled.div`
    a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.fullWhite};
    }
    margin: auto 1rem auto 0rem;
    background-color: ${(props) => props.theme.colors.blue};
    width: 3.5rem;
    border-radius: 45px;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.10);
`;
const Icon = styled.div`
    svg {
        font-size: 1.5rem;
    }
    padding: 1rem;
    margin: 0rem auto;
    width: fit-content;
`;

export const AddButton = ({
    route
}) => {

    return (
        <IconWrapper>
            <a href={route}>
                <Icon><FontAwesomeIcon icon={faPlus}/></Icon>
            </a>
        </IconWrapper>
    );
}