import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useIndividualPostingData = (id) => {
    const { isSuccess, isLoading, isError, data, error } = useQuery({
        queryKey: ["posting"],
        queryFn: async () => {
            const response = await axios.get(`http://localhost:8888/postings/postings/${id}`);
            const data = await response?.data;
            return data;
        }
    })
    return { isSuccess, isLoading, isError, data, error };
};