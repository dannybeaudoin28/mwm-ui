import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useIndividualPostingData } from "../../hooks/useIndividualPostingQuery/useIndividualPostingQuery";

import {
    FullPostingContainer,
    FullPostTitle,
    FullPostBody,
    PostMetaData,
    FullPostAuthor
} from './full-posting.styles';

const FullPosting = (props) => {
    const [postData, setPostData] = useState('');

    const { id } = useParams();
    const data = useIndividualPostingData(id);

    useEffect(() => {
        setPostData(data?.data);
    }, [data]);

    return (
        <FullPostingContainer>
            {postData !== undefined ? (
                <>
                    <FullPostAuthor>Posted by: </FullPostAuthor>
                    <FullPostTitle>{postData.postTitle}</FullPostTitle>
                    <FullPostBody>{postData.postBody}</FullPostBody>
                    <PostMetaData>Created at: {postData.postDate}</PostMetaData>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </FullPostingContainer>
    );
};

export default FullPosting;
