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
    const handleClick = (posting) => navigate(`/posts/posting/${id}`, { replace: true }, {
        postId: posting.id
    });

    return (
        <PostingPreviewContainer onClick={handleClick}>
            <PostingPreviewAuthor>Posted by: </PostingPreviewAuthor>
            <PostingPreviewTitle>{posting.postTitle}</PostingPreviewTitle>
            <PostingPreviewBody>{posting.postBody}</PostingPreviewBody>
        </PostingPreviewContainer>
    );
};
export default PostingPreview;