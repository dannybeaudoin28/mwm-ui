import { PostingPreviewContainer } from "./posting-preview.styles";

const PostingPreview = ({posting}) => {
    console.log(posting)
    return (
        <PostingPreviewContainer>
            <h1>title: {posting.postTitle}</h1>
            <h1>Body: {posting.postBody} </h1>
        </PostingPreviewContainer>
    );
};
export default PostingPreview;