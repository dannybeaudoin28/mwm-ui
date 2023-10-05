import { useState } from 'react';
import {
    CommentContainer,
} from './comment.styles.jsx';

const Comment = ({ comment }) => {
    const [comm, setComm] = useState([]);

    useState(() => {
        setComm(comment);
    }, [comment]);


    return (
        <CommentContainer>
            <p>Response from: </p>
            <h2>{comm.body}</h2>
        </CommentContainer>
    )
};

export default Comment;