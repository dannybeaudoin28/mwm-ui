import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useIndividualPostingData } from "../../hooks/useIndividualPostingQuery/useIndividualPostingQuery";

const FullPosting = (props) => {
    const { id } = useParams();
    const data = useIndividualPostingData(id);

    useEffect(() => {
        console.log(data.data)
        // setPostData(data.data);
    }, [data]);

    return (
        <div>
            {data ? (
                <>
                    <h2>{data.data.postTitle}</h2>
                    <h3>{data.data.postBody}</h3>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default FullPosting;
