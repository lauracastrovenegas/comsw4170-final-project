/* Generic Back Button */

import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    background-color: ${(props) => props.theme.colors.blue};
`;

export const BackButton = ({
    text, // text of button
    route // route
}) => {
    return (
            <Wrapper>
                <a href={route}>
                    {text}
                </a>
            </Wrapper>
    );
}