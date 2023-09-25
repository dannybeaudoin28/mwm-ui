import {
    CreatePostContainer,
    CreatePostLabel,
    CreatePostTextArea,
    CreatePostTextInput,
    CreatePostSubmitBtn
} from "./post.styles";

const FormValues = {
    postTitle: '',
    postBody: '',
}

const Post = () => {

    return (
        <>
            <div>
                <h1>Write a post below</h1>
            </div>
            <CreatePostContainer>
                <form>
                    <CreatePostLabel>Post Title:
                        <br /><CreatePostTextInput type="text" name="title" />
                    </CreatePostLabel>
                    <br />
                    <CreatePostLabel>Post:
                        <br /><CreatePostTextArea name="post" />
                    </CreatePostLabel>
                    <br />
                    <CreatePostSubmitBtn type="submit" value="submit" >Submit Post</CreatePostSubmitBtn>
                </form>
            </CreatePostContainer>
        </>
    )
};

export default Post;