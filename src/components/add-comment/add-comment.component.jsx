import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const AddComment = (id) => {
    const navigate = useNavigate();

    const [ formValues, setFormValues] = useState({
        body: "",
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        submitComment(formValues, id);
        navigate(`/posts/posting/${id}`);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const submitComment = (formValues, id ) => {
        const postId = id.id;

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
        <div>
            <div>
                <p>Write a comment below as: </p>
            </div>
            <div>
                <form>
                    <br />
                    <textarea name="body" onChange={handleChange}/>
                    <br />
                    <button type="submit" value="submit" onClick={handleSubmit}>Submit Comment</button>
                </form>
            </div>
        </div>
    );
};

export default AddComment;