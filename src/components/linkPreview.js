/* Link Preview Component */

import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-regular-svg-icons'

const Wrapper = styled.div`
    
`;
const Image = styled.div`
    
`;

const Content = styled.div`
    
`;

const Title = styled.div`
    
`;

const Text = styled.div`
    
`;

const Url = styled.div`
    
`;

export const AddButton = ({
    url
}) => {
    const [imageURL, setImageURL] = useState("");
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [description, setDescription] = useState("");
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getLinkInfo(url)
      }, []);

    const getLinkInfo = async (url) => {
        
    };

    return (
        <Wrapper>
            {isLoading ? null : 
            <a href={url}>
                <Image></Image>
                <Content>
                    <Title></Title>
                    <Text></Text>
                    <Url></Url>
                </Content>
            </a>}
        </Wrapper>
    );
}