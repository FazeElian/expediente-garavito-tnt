// Styles
import "../assets/css/components/Episodes.css";

// Components for this one
import { TitleSection } from "./TitleSection"
import { StorieCard } from "./StorieCard";

// React icons
import { BiMoviePlay } from "react-icons/bi";

// React scroll
import { Element } from "react-scroll";

const StoriesGallery = () => {
    return (
        <>
            <TitleSection
                icon={<BiMoviePlay />}
                text="Voces del Campus"
            />
            <Element name="stories" className="episodes-gallery stories-gallery">
                <StorieCard />
                <StorieCard />
                <StorieCard />
                <StorieCard />
                <StorieCard />
                <StorieCard />
            </Element>
        </>
    )
}

export { StoriesGallery }