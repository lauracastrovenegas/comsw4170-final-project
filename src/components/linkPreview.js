/* Link Preview Component */

import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

const Wrapper = styled.a`
    text-decoration: none;
    color: ${(props) => props.theme.colors.gray};
    width: fit-content;
`;

const Box = styled.a`
    display: flex;
    flex-direction: row; 
    height: 6rem;
    width: 87vw;
    background-color:${(props) => props.theme.colors.lightGray};
    border-radius: 15px;
`;
const Image = styled.div`
    img {
        width: 6rem;
        height: 6rem;
        object-fit: cover;
        border-radius: 15px 0px 0px 15px;
    }
`;

const Content = styled.div`
    width: 55vw;
    padding: 0.8rem;
`;

const Title = styled.div`
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 75ch;
`;

const Description = styled.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    font-size: 0.8rem;
`;

const Url = styled.div`
    display: flex;
    margin-top: 0.3rem
`;

const Text = styled.div`
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 75ch;
    font-size: 0.8rem;
`;

const Icon = styled.div`
    font-size: 0.8rem;
    margin: auto 0.2rem auto 0rem;
`;

export const LinkPreview = ({
    url
}) => {
    const [imageURL, setImageURL] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isLoading, setLoading] = useState(true);
    const key = "e109c1dcf4278763037690080b29af44";

    useEffect(() => {
        //getLinkInfo(url)
    }, []);

    const getLinkInfo = async (url) => {
        axios("http://api.linkpreview.net/?key=" + key + "&q=" + url)
        .then((response) => {
            setData(response.data);
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
        })
        .finally(() => {
            setLoading(false);
        });
    };

    const setData = (data) => {
        console.log(JSON.stringify(data))
        setTitle(data.title)
        setImageURL(data.image)
        setDescription(data.description)
    }

    return (
        <Wrapper href={url}>
            {isLoading ? null :
            <Box>
                <Image><img src={imageURL}></img></Image>
                <Content>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                    <Url><Icon><FontAwesomeIcon icon={faLink}/></Icon><Text>{url}</Text></Url>
                </Content>
            </Box> 
            }
        </Wrapper>
    );
}