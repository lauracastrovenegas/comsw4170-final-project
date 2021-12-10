/* Star Rating Component */

import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as starSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as starReg } from '@fortawesome/free-regular-svg-icons'

const Wrapper = styled.div`
    display: flex;
`;
const Icon = styled.div`
    svg {
        font-size: 1rem;
        color: ${(props) => props.theme.colors.yellow};
    }
    margin: 0.1rem;
    width: fit-content;
`;

export const RateComponent = ({
    rate
}) => {

    return (
        <Wrapper>
            <Icon>{rate > 0 ? <FontAwesomeIcon icon={starSolid}/> : <FontAwesomeIcon icon={starReg}/>}</Icon>
            <Icon>{rate > 1 ? <FontAwesomeIcon icon={starSolid}/> : <FontAwesomeIcon icon={starReg}/>}</Icon>
            <Icon>{rate > 2 ? <FontAwesomeIcon icon={starSolid}/> : <FontAwesomeIcon icon={starReg}/>}</Icon>
            <Icon>{rate > 3 ? <FontAwesomeIcon icon={starSolid}/> : <FontAwesomeIcon icon={starReg}/>}</Icon>
            <Icon>{rate > 4 ? <FontAwesomeIcon icon={starSolid}/> : <FontAwesomeIcon icon={starReg}/>}</Icon>
        </Wrapper>
    );
}