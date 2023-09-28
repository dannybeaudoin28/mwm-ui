import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useIndividualPostingData = (id) => {
    const individualPostingQuery = useQuery({
        queryKey: ["posting"],
        queryFn: async () => {
            const response = await axios.get(`http://localhost:8888/api/postings/${id}`);
            const data = await response.data;
            return data;
        }
    })
    return individualPostingQuery;
};