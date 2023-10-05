import { useState } from 'react';
import {
    CommentContainer,
    CommentContent,
    CommentMetta,
} from './comment.styles.jsx';

const Comment = ({ comment }) => {
    const [comm, setComm] = useState([]);

    useState(() => {
        setComm(comment);
    }, [comment]);


    return (
        <CommentContainer>
            <CommentMetta>Response from: test at {comm.commentDate}</CommentMetta>
            <CommentContent>{comm.body}</CommentContent>
        </CommentContainer>
    )
};

export default Comment;