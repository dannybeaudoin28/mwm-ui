import { useState } from "react";
import { useNavigate } from "react-router";

import {
    TextAreaBox,
    AddCommentContainer
} from './add-comment.styles';

const AddComment = ({ id }) => {
    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({
        body: "",
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formValues.body.length > 0) {
            submitComment(formValues, id);
            navigate(0);    //refresh
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const submitComment = (formValues, id) => {
        const postId = id;

        console.log('id: ', postId);
        fetch(`http://localhost:8888/comments/post-comment/${postId}`, {
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
        <AddCommentContainer>
            <div>
                <p>Write a comment below as: test</p>
            </div>
            <div>
                <form>
                    <br />
                    <TextAreaBox name="body" onChange={handleChange} />
                    <br />
                    <button type="submit" value="submit" onClick={handleSubmit}>Submit Comment</button>
                </form>
            </div>
        </AddCommentContainer>
    );
};

export default AddComment;