import { useState } from "react";
import { useNavigate } from "react-router";


import {
    TextAreaBox,
    AddCommentContainer
} from './add-comment.styles';
import { Button, TextField } from "@mui/material";

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
                    {/* <TextAreaBox name="body" onChange={handleChange} /> */}
                    <TextField
                        variant="filled"
                        type="text"
                        onChange={handleChange}
                        name="body"
                        multiline
                        rows={6}
                        sx={{
                            backgroundColor: 'primary.light',
                            marginLeft: '2%',
                            marginRight: '2%',
                            marginBottom: 3,
                            width: '96%',
                            // height: '10rem',
                        }}
                    />
                    <br />
                        <Button
                            type="submit"
                            value="submit"
                            variant="contained"
                            style={{
                                position: 'relative',
                                right: '0rem'
                            }}
                            onClick={handleSubmit}>Submit Comment
                        </Button>
                </form>
            </div>
        </AddCommentContainer>
    );
};

export default AddComment;