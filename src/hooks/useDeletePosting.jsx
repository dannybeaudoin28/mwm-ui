import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useDeletePosting = () => {
    const queryClient = useQueryClient();

    const deletePostingMutation = useMutation(
        (id) => axios.delete(`http://localhost:8888/postings/postings/${id}`),
        {
            onMutate: async (id) => {
                // Cancel any queries related to the deleted posting
                queryClient.cancelQueries(`delete-posting-${id}`);
            },
            onError: (error) => {
                // Handle error here if needed
                console.error("Error deleting posting:", error);
            },
            onSettled: (id) => {
                // Remove the deleted posting from the cache
                queryClient.invalidateQueries(`delete-posting-${id}`);
            },
        }
    );

    const deletePosting = async (id) => {
        try {
            await deletePostingMutation.mutateAsync(id);
        } catch (error) {
            // Handle any errors that occurred during the delete operation
            console.error("Error deleting posting:", error);
        }
    };

    return deletePosting;
};