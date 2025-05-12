import { Link } from "react-router-dom";

// React icons
import { FaRegCalendar } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaSpotify, FaYoutube } from "react-icons/fa";

// Framer motion
import { motion } from "motion/react";

// Type
import { EpisodeCardType } from "../types/type";

// Utils
import { truncateText } from "../utils/truncateText";

const EpisodeCard = ({
    id,
    name,
    description,
    date,
    imgSrc,
    duration,
    spotifyUrl,
    youtubeUrl
}: EpisodeCardType) => {
    return (
        <motion.div
            className="episode-card"
            whileHover={{ scale: 1.1 }}
            transition={{
                duration: .25,
            }}
        >
            <div className="episode-img">
                <img src={ imgSrc } alt={ name } />
            </div>
            <div className="episode-txt">
                <h2><b>Episodio { id }: </b>{ name }</h2>
                <div className="episode-txt-extra">
                    <div className="episode-txt-date">
                        <FaRegCalendar />
                        { date }
                    </div>
                    <div className="episode-txt-duration">
                        <MdOutlineWatchLater />
                        { duration } min
                    </div>
                </div>
                <p>
                    { truncateText(description, 90) }
                </p>
                <div className="episode-btns">
                    <Link to={ spotifyUrl } className="btn-episode btn-episode--spotify" target="_blank">
                        <FaSpotify />
                        Spotify
                    </Link>
                    <Link to={ youtubeUrl } className="btn-episode btn-episode--youtube" target="_blank">
                        <FaYoutube />
                        Youtube
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export { EpisodeCard }