import { useState } from "react";
import {
    CreatePostContainer,
    CreatePostLabel,
    CreatePostTextArea,
    CreatePostTextInput,
    CreatePostSubmitBtn,
    TextArea
} from "./post.styles";
import { useNavigate } from "react-router";

import {
    Button,
    TextField
} from '@mui/material';

const Post = () => {
    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({
        postTitle: "",
        postBody: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //TODO: validate user input
        //TODO: Add conditional logic if res code 200 redirect to that post else: display failure message
        console.log(formValues)
        submitPost(formValues);
        navigate('/posts');
    };

    const submitPost = (formValues) => {
        fetch('http://localhost:8888/postings/post-posting', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(formValues),
        })
            .then((res) => res.json())
            .then((result) => console.log(result))
            .catch((err) => console.log(err))
    };

    return (
        <>
            <div>
                <h1>Write a post below</h1>
            </div>
            <CreatePostContainer
                sx={{
                    marginLeft: [ '1rem', '3rem', '20rem'],
                    marginRight: [ '1rem', '3rem', '20rem']
                }}
            >
                <form>
                    <CreatePostLabel>Post Title:
                        <br />
                        <CreatePostTextInput 
                            type="text" 
                            onChange={handleChange} 
                            name="postTitle" 
                            sx={{
                                marginRight: [ '1rem', '3rem', '20rem' ],
                                width: '100%'
                            }}
                        />
                    </CreatePostLabel>
                    <br />
                    <CreatePostLabel>Post:
                        {/* <br /><CreatePostTextArea onChange={handleChange} name="postBody" /> */}
                        <TextField
                            variant="filled"
                            type="text"
                            onChange={handleChange}
                            name="postBody"
                            sx={{
                                width: [ '100%', '20rem', '30rem' ],
                                "& .MuiInputBase-root": {
                                    height: 80
                                }
                            }}
                        />
                    </CreatePostLabel>
                    <br />
                    {/* <CreatePostSubmitBtn type="submit" value="submit" onClick={handleSubmit}>Submit Post</CreatePostSubmitBtn> */}
                    <Button 
                        variant="contained" 
                        type="submit" 
                        value="submit" 
                        onClick={handleSubmit}
                    >
                    Submit
                    </Button>
                </form>
            </CreatePostContainer>
        </>
    )
};

export default Post;