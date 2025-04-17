import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

// API Call
import { getStoryById } from "../api/api";
import { Story } from "../types/type";

const StoryView = () => {
    const { id } = useParams<{ id: string }>();

    const { data: story, isLoading } = useQuery<Story>({
        queryFn: () => getStoryById(Number(id)),
        queryKey: ["stories", id],
        retry: 1,
        refetchOnWindowFocus: false,
        // gcTime: 30 * 10000,
        // staleTime: 1000 * 60 * 5,
    });

    if (isLoading) return <h1>Loading....</h1>;

    if (story) {
        return (
            <div style={{ color: "white", margin: "5rem" }}>
                <h1>Nombre historia: {story.title}</h1>
                <h2>Autor: {story.author}</h2>
                <h2>Historia:<br /> {story.content}</h2>
            </div>
        )
    }
}

export default StoryView