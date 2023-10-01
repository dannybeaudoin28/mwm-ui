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

const FullPosting = (props) => {
    const [postData, setPostData] = useState('');

    const { id } = useParams();
    const data = useIndividualPostingData(id);

    if(data.isLoading) {
        console.log('loading...');
    }

    useEffect(() => {
        setPostData(data?.data);
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
                </>
            ) : (
                <ErrorMsg>Loading...</ErrorMsg>
            )}
        </FullPostingContainer>
    );
};

export default FullPosting;
