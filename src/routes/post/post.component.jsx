import { useState } from "react";
import {
    CreatePostContainer,
    CreatePostLabel,
    CreatePostTextArea,
    CreatePostTextInput,
    CreatePostSubmitBtn
} from "./post.styles";
import { useNavigate } from "react-router";

const Post = () => {
    const navigate = useNavigate();

    const [ formValues, setFormValues ] = useState({
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
        //TODO: Post Request to back end ->
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
            <CreatePostContainer>
                <form>
                    <CreatePostLabel>Post Title:
                        <br /><CreatePostTextInput type="text" onChange={handleChange} name="postTitle" />
                    </CreatePostLabel>
                    <br />
                    <CreatePostLabel>Post:
                        <br /><CreatePostTextArea onChange={handleChange} name="postBody" />
                    </CreatePostLabel>
                    <br />
                    <CreatePostSubmitBtn type="submit" value="submit" onClick={handleSubmit} >Submit Post</CreatePostSubmitBtn>
                </form>
            </CreatePostContainer>
        </>
    )
};

export default Post;