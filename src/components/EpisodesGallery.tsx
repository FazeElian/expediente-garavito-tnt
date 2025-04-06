// Styles
import "../assets/css/components/Episodes.css";

// Components for this one
import { TitleSection } from "./TitleSection"
import { EpisodeCard } from "./EpisodeCard";

// React icons
import { BiMoviePlay } from "react-icons/bi";

const EpisodesGallery = () => {
    return (
        <>
            <TitleSection
                icon={<BiMoviePlay />}
                text="Episodios"
            />
            <section className="episodes-gallery">
                <EpisodeCard />
                <EpisodeCard />
                <EpisodeCard />
                <EpisodeCard />
                <EpisodeCard />
                <EpisodeCard />
            </section>
        </>
    )
}

export { EpisodesGallery }