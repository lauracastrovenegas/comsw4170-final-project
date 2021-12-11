/* Add Collaborator Icon */

import React, { useEffect } from "react";
import styled from "styled-components/macro";

const ImageWrapper = styled.div`
    border: 1px solid #5451F6;
    border-radius: 40px;
    width: 4rem;
    height: 4rem;
    margin: 0.5rem;
    img {
        width: 4rem;
        height: 4rem;
        object-fit: cover;
        border-radius: 40px;
    }
`;

export const CollaboratorIcon = ({
    imageURL
}) => {

    return (
        <ImageWrapper>
            <img src={imageURL}></img>
        </ImageWrapper>
    );
}