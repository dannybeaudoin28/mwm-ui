import { useEffect, useState } from "react";

import deleteLogo from '../../assets/delete.svg';

import {
    PostingPreviewContainer,
    PostingPreviewBody,
    PostingPreviewTitle,
    PostingPreviewAuthor,
    DeleteImage,
} from "./posting-preview.styles";

import { useNavigate } from 'react-router';
import { useDeletePosting } from "../../hooks/useDeletePosting";

const PostingPreview = ({ posting }) => {
    const { id } = posting; 

    const navigate = useNavigate();
    const deletePosting = useDeletePosting();
    const [commentCount, setCommentCount] = useState(posting.comments.length);

    const handleClick = () => {
        navigate(`/posts/posting/${posting.id}`, { replace: true }, { postId: posting.id });
    };

    const handleDelete = () => {
        if (posting.id != null && posting.id != undefined) {
            deletePosting(id);
        }
    };

    return (
        <PostingPreviewContainer>
            <div>
                <PostingPreviewAuthor>Posted by: </PostingPreviewAuthor>
                <DeleteImage src={deleteLogo} alt="deleteLogo" onClick={handleDelete} />
            </div>
            <PostingPreviewTitle onClick={handleClick}>{posting.postTitle}</PostingPreviewTitle>
            <PostingPreviewBody>{posting.postBody}</PostingPreviewBody>
            {commentCount > 0 ? <p>Comments: {commentCount}</p> : <p>No comments</p>}
        </PostingPreviewContainer>
    );
};
export default PostingPreview;