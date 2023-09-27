import { useQuery } from "@tanstack/react-query";
import axios from 'axios';

export const UsePostingQuery = () => {
    console.log('running query')
    const postingQuery = useQuery({
        queryKey: ["postings"],
        queryFn: async () => {
            const response = await axios.get("http://localhost:8888/api/all-postings");
            const data = await response.data;
            console.log(data);
            return data;
        }
    })

    if (postingQuery.isLoading) return ( <h1>Loading...</h1>)
    if (postingQuery.isError) return (<h1>Error loading data...</h1>)

    return (
        <div>
            <h1>done loading data</h1>
        </div>
    )
}