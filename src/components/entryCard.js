/* This is a rectangular "Entry" Card component
- displayed on list page
- on Click redirect to entryDetail.js (EntryPage) */

import React from "react";
import styled from "styled-components";
import { ReactionIcon } from "./reactionIcon";

const Card = styled.a`
    text-decoration: none;
    color: ${(props) => props.theme.colors.black};
    width: fit-content;
`;

const CardWrapper = styled.div`
    padding: 1rem;
    width: 80vw;
    display: flex;
    flex-direction: row;
    margin: 0.5rem auto;
    background-color: ${(props) => props.theme.colors.fullWhite};
    border-radius: 7px;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.10);
    border: 0px;
`;

const Content = styled.div`
    display: inline-block;
`;

export const EntryCard = ({listid, id, title, location, notes, date_created, reaction}) => {
    return (
        <Card href={`/list/${listid}/${id}`}>
            <CardWrapper>
                <ReactionIcon reaction={reaction}/>
                <Content>
                    <div>{title}</div>
                    <div>{date_created}</div>
                </Content>
            </CardWrapper>
        </Card>
    );
}