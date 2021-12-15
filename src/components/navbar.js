import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListAlt as faListAltFilled } from '@fortawesome/free-solid-svg-icons'
import { faListAlt } from '@fortawesome/free-regular-svg-icons'
import { faCompass } from '@fortawesome/free-regular-svg-icons'
import { faCompass as faCompassFilled } from '@fortawesome/free-solid-svg-icons'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import {ReactComponent as HomeFilled} from '../assets/home.svg';
import {ReactComponent as HomeOutline} from '../assets/home_outline.svg';
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';

const NavWrapper = styled.nav`
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid ${(props) => props.theme.colors.lightGray};
    background-color: ${(props) => props.theme.colors.fullWhite};
    height: 4.5rem;
`;

const MenuItem = styled.div`
    flex: 1;
    padding: 0.5rem;
    text-decoration: none;
`;

const Icon = styled.div`
    width: fit-content;
    margin: 0.7rem auto;
    svg{
        font-size: 2rem;
        color: ${(props) => props.theme.colors.gray};
    } 
`;

const HomeIcon = styled.div`
    width: fit-content;
    margin: 0.35rem auto;
`;

export const NavBar = ({currPage, setCurrPage}) => {

    const tabs = [
        {
            route: "/home/",
            icon: (currPage === "Home") ? <HomeFilled/> : <HomeOutline/>,
            label: "Home"
        },
        {
            route: "/",
            icon: (currPage === "Discover") ? faCompassFilled : faCompass,
            label: "Discover"
        },{
            route: "/my-lists/",
            icon: (currPage === "My Lists") ? faListAltFilled : faListAlt,
            label: "My Lists"
        }
    ]

    return (
        <NavWrapper>
            {tabs.map(tab => (
                <>
                {(tab.label === "Home") ? 
                  <MenuItem onClick={() => setCurrPage("Home")}>
                    <NavLink style={{ textDecoration: 'none' }} to={tab.route}>
                        <HomeIcon>{tab.icon}</HomeIcon>
                    </NavLink>
                  </MenuItem>
                : <MenuItem onClick={() => setCurrPage(tab.label)}>
                    <NavLink style={{ textDecoration: 'none' }} to={tab.route}>
                        <Icon><FontAwesomeIcon icon={tab.icon}/></Icon>
                    </NavLink>
                  </MenuItem>}
                </>
            ))}
        </NavWrapper>
    );
}