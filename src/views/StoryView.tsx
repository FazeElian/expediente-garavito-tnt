// Styles
import "../assets/css/components/StoryForm.css";
import "../assets/css/components/StoryContent.css";

import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";

// API Call
import { getStoryById } from "../api/api";
import { Story } from "../types/type";

// Loader component
import { Loading } from "../components/Loading";

// React icons
import { FaArrowLeftLong } from "react-icons/fa6";

// Date formats & other utils
import { formatDate } from "../utils/formatDate";
import { timeAgo } from "../utils/timeAgo";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";
import { truncateText } from "../utils/truncateText";

// Hook for title
import { useDocumentTitle } from "../hooks/useDocumentTitle"

const StoryView = () => {
    const { id } = useParams<{ id: string }>();

    const { data: story, isLoading } = useQuery<Story>({
        queryFn: () => getStoryById(Number(id)),
        queryKey: ["stories", id],
        retry: 1,
        refetchOnWindowFocus: false,
    });

    useDocumentTitle(story?.title || "");

    if (isLoading) return <Loading />

    if (story) {
        return (
            <section>
                <div className="top-share-story">
                    <Link to="/blog" className="btn-come-back">
                        <FaArrowLeftLong />
                    </Link>
                </div>
                <div className="story-content">
                    <h1>{story.title}</h1>
                    <div className="top-story-content">
                        <div className="item-top-story-content" style={{ paddingLeft: 0 }}>
                            <h2>
                                <b>Autor: </b>
                                {truncateText(story.author, 20)}
                            </h2>
                        </div>
                        <div className="item-top-story-content">
                            <h2>{formatDate(story.createdAt)}</h2>
                        </div>
                        <div className="item-top-story-content" style={{ border: 0 }}>
                            <h2>{capitalizeFirstLetter(timeAgo(story.createdAt))}</h2>
                        </div>
                    </div>
                    <img src={story.image} alt={story.title} />
                    <p>{story.content}</p>
                </div>
            </section>
        )
    }
}

export default StoryView