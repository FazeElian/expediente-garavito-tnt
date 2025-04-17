import { useQuery } from "@tanstack/react-query";

// Styles
import "../assets/css/components/Episodes.css";

// Components for this one
import { TitleSection } from "./TitleSection"
import { StorieCard } from "./StorieCard";

// React icons
import { BiMoviePlay } from "react-icons/bi";

// React scroll
import { Element } from "react-scroll";

// Type
import { Story } from "../types/type";

// Api call function
import { getAllStories } from "../api/api";

const StoriesGallery = () => {
    const { data: stories, isLoading } = useQuery({
        queryFn: getAllStories,
        queryKey: ["stories"],
        retry: 1,
        refetchOnWindowFocus: false,
        gcTime: 30 * 10000,
        staleTime: 1000 * 60 * 5,
    });

    if (isLoading) return <h1>Loading....</h1>;

    return (
        <>
            <TitleSection
                icon={<BiMoviePlay />}
                text="Voces del Campus"
            />
            <Element name="stories" className="episodes-gallery stories-gallery">
                {stories?.map((story: Story) => (
                    <StorieCard
                        key={story.id}
                        id={story.id}
                        title={story.title}
                        author={story.author}
                        content={story.content}
                        image={story.image}
                        createdAt={story.createdAt}
                        updatedAt={story.updatedAt}
                    />
                ))}
            </Element>
        </>
    )
}

export { StoriesGallery }