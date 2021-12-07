import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListUl } from '@fortawesome/free-solid-svg-icons'
import { faCompass } from '@fortawesome/free-regular-svg-icons'

const NavWrapper = styled.div`
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid ${(props) => props.theme.colors.lightGray};
    background-color: ${(props) => props.theme.colors.fullWhite};
`;

const MenuItem = styled.a`
    flex: 1;
    padding: 0.5rem;
    text-decoration: none;
    color: ${(props) => props.theme.colors.black};
`;

const Icon = styled.div`
    width: fit-content;
    margin: 0.7rem auto;
    svg{
        font-size: 2rem;
    } 
`;

const IconText = styled.div`
    width: fit-content;
    margin: 0rem auto;
`;

export const NavBar = () => {
    return (
        <NavWrapper>
            <MenuItem href="/">
                <Icon><FontAwesomeIcon icon={faCompass} /></Icon>
            </MenuItem>
            <MenuItem href="/my-lists/">
                <Icon><FontAwesomeIcon icon={faListUl} /></Icon>
            </MenuItem>
        </NavWrapper>
    );
}