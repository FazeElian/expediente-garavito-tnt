// Styles
import "../assets/css/components/Episodes.css";

// Components for this one
import { TitleSection } from "./TitleSection"
import { EpisodeCard } from "./EpisodeCard";

// React icons
import { BiMoviePlay } from "react-icons/bi";

// React scroll
import { Element } from "react-scroll";

// Episodes images
import EpisodeImg from "../assets/img/Default.webp";
import Episode1Img from "../assets/img/Episodio 1 - Archivo 2016.jpg";
import Episode2Img from "../assets/img/Episodio 2 - Archivo Clasificado.jpg";

// Type
import { EpisodeCardType } from "../types/type";

const EpisodesGallery = () => {
    const episodesList = [
        {
            id: 1,
            name: "Archivo 2016",
            description: "Un estudiante relata una experiencia extraña en un salón vacío. Se convirtió en un encuentro inexplicable con lo imposible.",
            date: "10/05/2025",
            imgSrc: Episode1Img,
            duration: 7,
            spotifyUrl: "https://open.spotify.com/episode/2zRECvOq6FjsDRpkpU3aOi?si=9GDMXE1yS7umdVYYN7Kscg",
            youtubeUrl: "https://www.youtube.com/watch?v=lKnAmUiAhlI&t"
        },
        {
            id: 2,
            name: "Archivo Clasificado",
            description: "Un joven investiga las anomalías del primer semestre y su posible conexión con Julio Garavito. Su búsqueda de la verdad terminó en tragedia… y misterio.",
            date: "10/05/2025",
            imgSrc: Episode2Img,
            duration: 5,
            spotifyUrl: "https://open.spotify.com/episode/43CXuwp1bkY03kuVFI2lg7?si=d-RdsTV6T12RG5NIb_qmEg",
            youtubeUrl: "https://www.youtube.com/watch?v=9iwB4na2dco"
        },
        {
            id: 3,
            name: "Próximamente...",
            description: "Próximamente... Próximamente... Próximamente... Próximamente... Próximamente... Próximamente... Próximamente...",
            date: "##/##/####",
            imgSrc: EpisodeImg,
            duration: 0,
            spotifyUrl: "#",
            youtubeUrl: "#"
        }
    ]

    return (
        <>
            <TitleSection
                icon={<BiMoviePlay />}
                text="Episodios"
            />
            <Element name="episodes" className="episodes-gallery">
                {episodesList.map((episode: EpisodeCardType) => (
                    <EpisodeCard
                        key={episode.id}
                        id={episode.id}
                        name={episode.name}
                        description={episode.description}
                        date={episode.date}
                        imgSrc={episode.imgSrc}
                        duration={episode.duration}
                        spotifyUrl={episode.spotifyUrl}
                        youtubeUrl={episode.youtubeUrl}
                    />
                ))}
            </Element>
        </>
    )
}

export { EpisodesGallery }