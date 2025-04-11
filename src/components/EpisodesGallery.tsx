// Styles
import "../assets/css/components/Episodes.css";

// Components for this one
import { TitleSection } from "./TitleSection"
import { EpisodeCard } from "./EpisodeCard";

// React icons
import { BiMoviePlay } from "react-icons/bi";

// React scroll
import { Element } from "react-scroll";

const EpisodesGallery = () => {
    return (
        <>
            <TitleSection
                icon={<BiMoviePlay />}
                text="Episodios"
            />
            <Element name="episodes" className="episodes-gallery">
                <EpisodeCard />
                <EpisodeCard />
                <EpisodeCard />
                <EpisodeCard />
                <EpisodeCard />
                <EpisodeCard />
            </Element>
        </>
    )
}

export { EpisodesGallery }