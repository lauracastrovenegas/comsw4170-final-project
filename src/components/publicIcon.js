/* Public Icon for List Cards */

import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const IconWrapper = styled.div`
    background-color: ${(props) => props.theme.colors.opaqueWhite};
    width: 2rem;
    border-radius: 45px;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.10);
`;
const Icon = styled.div`
    svg {
        color: ${(props) => props.theme.colors.gray};
    }
    padding: 0.5rem;
    width: fit-content;
`;

export const PublicIcon = () => {

    return (
        <IconWrapper>
            <Icon><FontAwesomeIcon icon={faGlobe}/></Icon>
        </IconWrapper>
    );
}