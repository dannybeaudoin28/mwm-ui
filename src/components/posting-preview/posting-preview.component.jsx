import { useState } from "react";
import {
    PostingPreviewContainer,
    PostingPreviewBody,
    PostingPreviewTitle,
    PostingPreviewAuthor,
} from "./posting-preview.styles";

import { useNavigate } from 'react-router';

const PostingPreview = ({ posting }) => {
    const id = posting.id;
    const navigate = useNavigate();

    const [commentCount, setCommentCount] = useState(posting.comments.length);

    const handleClick = (posting) => navigate(`/posts/posting/${id}`, { replace: true }, {
        postId: posting.id
    });

    return (
        <PostingPreviewContainer onClick={handleClick}>
            <PostingPreviewAuthor>Posted by: </PostingPreviewAuthor>
            <PostingPreviewTitle>{posting.postTitle}</PostingPreviewTitle>
            <PostingPreviewBody>{posting.postBody}</PostingPreviewBody>
            {commentCount > 0 ? <p>Comments: {commentCount}</p> : <p>No comments</p>}
        </PostingPreviewContainer>
    );
};
export default PostingPreview;