import React from "react";
import styled from "styled-components";
import discoverIcon from "../assets/discover-icon.png";
import listIcon from "../assets/list-icon.png";

const NavWrapper = styled.div`
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: ${(props) => props.theme.colors.blue};
`;

const MenuItem = styled.a`
    flex: 1;
    padding: 0.5rem;
    text-decoration: none;
    color: ${(props) => props.theme.colors.black};
`;

const Icon = styled.div`
    width: fit-content;
    margin: 0rem auto;
    img{
        width: 2rem;
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
                <Icon><img src={discoverIcon}/></Icon>
                <IconText>Discover</IconText>
            </MenuItem>
            <MenuItem href="/my-lists/">
                <Icon><img src={listIcon}/></Icon>
                <IconText>My Lists</IconText>
            </MenuItem>
        </NavWrapper>
    );
}