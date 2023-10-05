import { useQuery } from "@tanstack/react-query";
import axios, { all } from "axios";

export const usePostingData = () => {
    const postingQuery = useQuery({
        queryKey: ["postings"],
        queryFn: async () => {
            const response = await axios.get("http://localhost:8888/postings/all-postings");
            const data = await response.data;
            // setData(data);
            return data;
        }
    })

    return postingQuery;
    // return useQuery(['postings'], fetchPostings, {
    //     onSuccess,
    //     onError, 
    //     select: (data) => {
    //         const allPostings = data.data;
    //         return allPostings;
    //     }
    // })
};