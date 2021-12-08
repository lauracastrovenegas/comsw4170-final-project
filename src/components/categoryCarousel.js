/* This is the category horizontal scroll carousel component
- displayed on discovery page
- uses List Cards */

import React from "react";
import styled from "styled-components";
import { ListCard } from "./listCard";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.fullWhite};
    margin: 1rem;
`;

const Title = styled.div`
    font-size: 1.5rem;
`;

const ListCards = styled.div`
    display: flex;
    width: 100%;
    overflow: scroll;
`;

const CardWrapper = styled.div`
    min-width: 10rem;
    max-width: 10rem;
    margin: 0.5rem 0.25rem;
`;

export const CategoryCarousel = ({
    category, // name of category (could be an object with more info)
    lists // array of lists
}) => {
    return (
            <Wrapper>
                <Title>{category}</Title>
                <ListCards>
                    {lists.map(list => (
                        <CardWrapper key={list.id}>
                            <ListCard 
                                id={list.id}
                                title={list.title}
                                date_created={list.date_created}
                                category={list.category}
                                isPinned={false}
                                currentRoute="Discover"
                            />
                        </CardWrapper>
                    ))}
                </ListCards>
            </Wrapper>
    );
}