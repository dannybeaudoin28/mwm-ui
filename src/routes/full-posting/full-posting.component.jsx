import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useIndividualPostingData } from "../../hooks/useIndividualPostingQuery/useIndividualPostingQuery";

const FullPosting = (props) => {
    const [postData, setPostData] = useState('');

    const { id } = useParams();
    const data = useIndividualPostingData(id);

    useEffect(() => {
        setPostData(data?.data);
    }, [data]);

    return (
        <div>
            {postData !== undefined ? (
                <>
                    <h2>{postData.postTitle}</h2>
                    <h3>{postData.postBody}</h3>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default FullPosting;
