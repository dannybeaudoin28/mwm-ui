import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const AddComment = (id) => {
    const navigate = useNavigate();

    useEffect(() => {
        console.log('id is: ', id);
    }, []);

    const [ formValues, setFormValues] = useState({
        body: "",
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        submitComment(formValues, id);
        navigate(`/posts/posting/${id}`);
    };

    const handleChange = (event) => {
        console.log('changing... id is: ', id)
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const submitComment = (formValues, id) => {
        fetch(`http://localhost:8888/api/post-comment/${id}`, {
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
                    <textarea name="body"/>
                    <br />
                    <button type="submit" value="submit" onClick={handleSubmit}>Submit Comment</button>
                </form>
            </div>
        </div>
    );
};

export default AddComment;