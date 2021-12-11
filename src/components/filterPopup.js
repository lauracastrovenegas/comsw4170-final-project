/* This is the bottom pop up filters component
- displayed on discovery page and my lists page */

import React from "react";
import styled from "styled-components";
import { categories, sort_by } from "../data/filter-sort";
import { CategoryTag } from "./catTag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
    position: absolute;
    bottom: 0;
    z-index: 1;
    height: fit-content;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
`;

const Content = styled.div`
    padding: 1rem;
    background-color: ${(props) => props.theme.colors.fullWhite};
    border-radius: 15px 15px 0px 0px;
    height: fit-content;
    position: fixed;
    bottom:0;
    right: 0;

    svg {
        position: fixed;
        right: 0;
        margin: 0.2rem 1.2rem;
        font-size: 1.5rem;
        color: ${(props) => props.theme.colors.gray};
    }
`;

const Categories = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;
`;

const Category = styled.div`
    margin: 0.3rem 0.2rem;
`;

const SortOptions = styled.div`
    border-bottom: 0.5px solid ${(props) => props.theme.colors.lightGray};
`;

const SortOption = styled.div`
    border-top: 0.5px solid ${(props) => props.theme.colors.lightGray};
    padding: 0.5rem;
`;

const Heading = styled.div`
    font-weight: 700;
    font-size: 1.2rem;
    margin: 0.5rem 0rem;
`;

const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0rem auto;
    width: fit-content;
`;

export const FilterPopUp = ({
    options, // add any props necesary
    submitFilters, // function that updates the List being shown 
                // ( function defined in parent component, passed here 
                // and called once aubmit button clicked to update parent container)
    isOpen,
    closePopup
}) => {
    return (
        <div>
                {isOpen ? 
                <Wrapper>
                <Content>
                    <FontAwesomeIcon onClick={() => closePopup()}icon={faTimes}/>
                    <Title>Filter</Title>
                    <Heading>Categories</Heading>
                    <Categories>
                        {categories.map(category => (
                            <Category>
                                <CategoryTag text={category.name} color={category.color}/>
                            </Category>
                        ))}
                    </Categories>
                    <Heading>Sort By</Heading>
                    <SortOptions>
                        {sort_by.map(option => (
                            <SortOption>{option}</SortOption>
                        ))}
                    </SortOptions>
                </Content>
            </Wrapper> : null}
        </div>
    );
}