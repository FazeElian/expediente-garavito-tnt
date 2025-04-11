// Episode example img
import EpisodeImg from "../assets/img/Episode.jpg";

// React icons
import { FaRegCalendar } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaSpotify, FaYoutube } from "react-icons/fa";

// Framer motion
import { motion } from "motion/react";

const EpisodeCard = () => {
    return (
        <motion.div
            className="episode-card"
            whileHover={{ scale: 1.1 }}
            transition={{
                duration: .25,
            }}
        >
            <div className="episode-img">
                <img src={EpisodeImg} alt="" />
            </div>
            <div className="episode-txt">
                <h2><b>Episodio #: </b>El Archivo Perdido</h2>
                <div className="episode-txt-extra">
                    <div className="episode-txt-date">
                        <FaRegCalendar />
                        22/03/2025
                    </div>
                    <div className="episode-txt-duration">
                        <MdOutlineWatchLater />
                        15 min
                    </div>
                </div>
                <p>
                    Descubrimiento de documentos y relatos ocultos que revelan las primeras
                    señales de un caso que estremeció a un país entero.
                </p>
                <div className="episode-btns">
                    <a href="#" className="btn-episode btn-episode--spotify">
                        <FaSpotify />
                        Spotify
                    </a>
                    <a href="#" className="btn-episode btn-episode--youtube">
                        <FaYoutube />
                        Youtube
                    </a>
                </div>
            </div>
        </motion.div>
    )
}

export { EpisodeCard }