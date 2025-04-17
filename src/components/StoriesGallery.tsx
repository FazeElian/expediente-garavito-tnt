import axios from "axios";
import { useEffect, useState } from "react";

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

const StoriesGallery = () => {
    const [stories, setStories] = useState<Story[]>([])

    const BASE_URL = import.meta.env.VITE_API_URL

    useEffect(() => {
        const fetchData = async () => {
            try {
                axios(`${BASE_URL}/stories`)
                    .then(response => {setStories(response.data)})
                    .catch(error => {console.log("Error: ", error)})
            } catch (error) {
                console.error("Error fetching Stories: ", error);
            }
        }
        fetchData();
    }, [BASE_URL]);

    return (
        <>
            <TitleSection
                icon={<BiMoviePlay />}
                text="Voces del Campus"
            />
            <Element name="stories" className="episodes-gallery stories-gallery">
                {stories.map((story: Story) => (
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