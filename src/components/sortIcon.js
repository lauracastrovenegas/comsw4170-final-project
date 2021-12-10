/* Reaction Icon */

import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSlidersH } from '@fortawesome/free-solid-svg-icons'

const IconWrapper = styled.div`
    width: 1rem;
    svg {
        font-size: 1.5rem;
        color: ${(props) => props.theme.colors.gray};
    }
    width: fit-content;
    margin: auto 0.25rem;
`;

export const SortIcon = ({}) => {
    return (
        <IconWrapper>
            <FontAwesomeIcon icon={faSlidersH}/>
        </IconWrapper>
    );
}