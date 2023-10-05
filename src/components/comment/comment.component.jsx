import {
    CommentContainer,
} from './comment.styles.jsx';

const Comment = ({ comment }) => {
    return (
        <CommentContainer>
            <p>Response from: </p>
            <h2>{comment.body}</h2>
        </CommentContainer>
    )
};

export default Comment;