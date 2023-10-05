import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useIndividualPostingData } from "../../hooks/useIndividualPostingQuery/useIndividualPostingQuery";

import {
    FullPostingContainer,
    FullPostTitle,
    FullPostBody,
    PostMetaData,
    FullPostAuthor,
    ErrorMsg
} from './full-posting.styles';
import AddComment from "../../components/add-comment/add-comment.component";
import Comment from "../../components/comment/comment.component";

const FullPosting = (props) => {
    const [postData, setPostData] = useState('');
    const [comments, setComments] = useState([]);

    const [isSub, setIsSub] = useState(0);

    const { id } = useParams();
    const data = useIndividualPostingData(id);

    useEffect(() => {
        setPostData(data?.data);
        setComments(data?.data?.comments);
    }, [data]);

    return (
        <FullPostingContainer>
            {postData !== undefined && data.isSuccess ? (
                <>
                    <FullPostAuthor>Posted by: </FullPostAuthor>
                    <FullPostTitle>{postData.postTitle}</FullPostTitle>
                    <FullPostBody>{postData.postBody}</FullPostBody>
                    <PostMetaData>Created at: {postData.postDate}</PostMetaData>
                    <AddComment id={id}/>
                    <br/>
                    {comments !== undefined ? comments.map(comment => {
                        return (
                            <Comment comment={comment} />
                        )
                    }) : (<p>No Comments</p>)}
                </>
            ) : (
                <ErrorMsg>Loading...</ErrorMsg>
            )}
        </FullPostingContainer>
    );
};

export default FullPosting;
