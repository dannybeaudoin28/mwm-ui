import styled from 'styled-components';

export const PostingPreviewContainer = styled.div`
    height: 15rem;
    margin-left: 10rem;
    margin-right: 10rem;
    margin-bottom: 3rem;
    margin-top: 3rem;
    border-style: solid;
    border-color: #d65900;
    background-color: #353535;
    color: #d65900;
    &:hover,
    &:focus {
        background-color: #353551;
        height: 20rem;
    }
    &:active {
        background-color: #353535;
    }
`

export const PostingPreviewAuthor = styled.p`
    margin-left: 2rem;
`

export const PostingPreviewTitle = styled.h1`
    color: white;
    margin-left: 2rem;
    margin-bottom: 2rem;
`

export const PostingPreviewBody = styled.h2`
    color: white;
    margin-left: 2rem;
    font-size: 1.5rem;
`