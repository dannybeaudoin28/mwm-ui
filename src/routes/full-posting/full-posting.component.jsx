import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useIndividualPostingData } from "../../hooks/useIndividualPostingQuery";

import {
    FullPostingContainer,
    FullPostTitle,
    FullPostBody,
    PostMetaData,
    FullPostAuthor,
    ErrorMsg,
    CommentDiv,
} from './full-posting.styles.jsx';
import AddComment from "../../components/add-comment/add-comment.component";
import Comment from "../../components/comment/comment.component";
import { Box } from "@mui/material";

const FullPosting = (props) => {
    const [postData, setPostData] = useState('');
    const [comments, setComments] = useState([]);

    const { id } = useParams();
    const data = useIndividualPostingData(id);

    useEffect(() => {
        setPostData(data?.data);
        setComments(data?.data?.comments);
    }, [data]);

    return (
        // <FullPostingContainer>
        //     {postData !== undefined && data.isSuccess ? (
        //         <>
        //             <FullPostAuthor>Posted by: </FullPostAuthor>
        //             <FullPostTitle>{postData.postTitle}</FullPostTitle>
        //             <FullPostBody>{postData.postBody}</FullPostBody>
        //             <PostMetaData>Created at: {postData.postDate}</PostMetaData>
        //             <AddComment id={id} />
        //             <br />
        //             {comments !== undefined ? comments.map(comment => {
        //                 return (
        //                     <CommentDiv>
        //                         <Comment key={comment.id} comment={comment} />
        //                     </CommentDiv>
        //                 )
        //             }) : (<p>No Comments</p>)}
        //         </>
        //     ) : (
        //         <ErrorMsg>Loading...</ErrorMsg>
        //     )}
        // </FullPostingContainer>
        <>
            {postData !== undefined && data.isSuccess ? (
                <Box
                    sx={{
                        // height: [550, 500, 500],
                        backgroundColor: "primary.dark",
                        opacity: 0.9,
                        marginLeft: ['1rem', '2rem', '3rem'],
                        marginRight: ['1rem', '2rem', '3rem'],
                        marginBottom: 3,
                        border: 1,
                        borderColor: 'red'
                    }}
                >
                    <FullPostAuthor>Posted by: Test</FullPostAuthor>
                    <FullPostTitle>{postData.postTitle}</FullPostTitle>
                    <FullPostBody>{postData.postBody}</FullPostBody>
                    <PostMetaData>Created at: {postData.postDate}</PostMetaData>
                    <AddComment id={id} />
                    <br />
                    {comments !== undefined ? comments.map(comment => {
                        return (
                            <Box
                                sx={{
                                    backgroundColor: 'secondary.light',
                                    color: 'white',
                                    marginBottom: 4,
                                    ":hover": {
                                        backgroundColor: 'primary.dark'
                                    }
                                }}
                            >
                                <Comment key={comment.id} comment={comment} />
                            </Box>
                            
                        )
                    }) : (<p>No Comments</p>)}
                </Box>
            ) : (
                <h1>No posts to show...</h1>
            )}
        </>

    );
};

export default FullPosting;
