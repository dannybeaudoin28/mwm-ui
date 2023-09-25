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
        console.log(formValues)

        //TODO: Add conditional logic if res code 200 redirect to that post else: display failure message
        navigate('/posts');
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