// import styled from 'styled-components';
import { FormLabel, Input, TextField } from "@mui/material";
import { styled } from "@mui/system";

export const CreatePostContainer = styled('div')({
    display: 'flex',
    width: '100%',
    justifyContent: 'left',
    fontSize: '1.5rem',
    marginBottom: '2rem',
    marginLeft: '5rem'
});

export const CreatePostLabel = styled(FormLabel)({
    marginLeft: '2rem',
    marginBottom: '3rem',
    width: "100%",
});

export const CreatePostTextInput = styled(Input)({
    marginTop: '1rem',
    marginLeft: '2rem',
    width: '355%',
});