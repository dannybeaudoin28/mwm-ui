import { useEffect, useState } from "react";

import deleteLogo from '../../assets/delete.svg';

import {
    PostingPreviewContainer,
    PostingPreviewBody,
    PostingPreviewTitle,
    PostingPreviewAuthor,
    DeleteImage,
    CommentCounter,
} from "./posting-preview.styles";

import { useNavigate } from 'react-router';
import { useDeletePosting } from "../../hooks/useDeletePosting";
import { Box } from "@mui/material";

const PostingPreview = ({ posting }) => {
    const { id } = posting;

    const navigate = useNavigate();
    const deletePosting = useDeletePosting();
    const [commentCount, setCommentCount] = useState(posting.comments.length);

    const handleClick = () => {
        console.log(posting)
        navigate(`/posts/posting/${posting.id}`, { replace: true }, { postId: posting.id });
    };

    const handleDelete = () => {
        if (posting.id !== null && posting.id !== undefined) {
            deletePosting(id);
        }
    };

    return (
        <>
            {/* <PostingPreviewContainer>
                <div>
                    <PostingPreviewAuthor>Posted by: </PostingPreviewAuthor>
                    <DeleteImage src={deleteLogo} alt="deleteLogo" onClick={handleDelete} />
                </div>
                <PostingPreviewTitle onClick={handleClick}>{posting.postTitle}</PostingPreviewTitle>
                <PostingPreviewBody>{posting.postBody}</PostingPreviewBody>
                {commentCount > 0 ? <CommentCounter>Comments: {commentCount}</CommentCounter>
                    : <CommentCounter>No comments</CommentCounter>}
            </PostingPreviewContainer> */}
            <Box
                sx={{
                    width: [450, 700, 2225],
                    height: 300,
                    backgroundColor: "primary.dark",
                    opacity: [0.9, 0.8, 0.7],
                    marginLeft: [3, 'auto', 'auto'],
                    marginBottom: 3,
                    marginRight: [3, 'auto', 'auto'],
                    border: 1,
                    borderColor: 'red'
                }}
            >
                <div>
                    <PostingPreviewAuthor>Posted by: </PostingPreviewAuthor>
                    <DeleteImage src={deleteLogo} alt="deleteLogo" onClick={handleDelete} />
                </div>
                <PostingPreviewTitle onClick={handleClick}>{posting.postTitle}</PostingPreviewTitle>
                <PostingPreviewBody>{posting.postBody}</PostingPreviewBody>
                {commentCount > 0 ? <CommentCounter>Comments: {commentCount}</CommentCounter>
                    : <CommentCounter>No comments</CommentCounter>}
            </Box>
        </>
    );
};
export default PostingPreview;