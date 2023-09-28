import { useEffect, useState } from 'react';
import { usePostingData } from '../../hooks/usePostingQuery/usePostingData';
import PostingPreview from '../../components/posting-preview/posting-preview.component';

const AllPosts = () => {
    const [postingData, setPostingData] = useState([]);
    const data = usePostingData();

    useEffect(() => {
        setPostingData(data.data);
    }, [data]);

    return (
        <div className='posting-preview-container'>
            {(postingData !== undefined ? postingData.map((post) => {
                return (
                    <div key={post.id}>
                        <PostingPreview posting={post} />
                    </div>
                )
            })
                : (<h1>No posts to show..</h1>)
            )}
        </div>
    );
};

export default AllPosts;