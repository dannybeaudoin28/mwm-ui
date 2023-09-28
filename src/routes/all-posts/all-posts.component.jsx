import { useEffect, useState } from 'react';
import { usePostingData } from '../../hooks/usePostingQuery/usePostingData';
import PostingPreview from '../../components/posting-preview/posting-preview.component';

const AllPosts = () => {
    const [postingData, setPostingData] = useState([]);
    const data = usePostingData();

    useEffect(() => {
        setPostingData(data.data);
    }, [data]);

    useEffect(() => {
        console.log(postingData);
    }, [postingData])

    return (
        <div className='posting-preview-container'>
            {postingData.map((post) => {
                return (
                    <PostingPreview posting={post} />
                );
            })}
        </div>
    );
};

export default AllPosts;