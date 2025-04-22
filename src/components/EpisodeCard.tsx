import { Link } from "react-router-dom";

// Episode example img
import EpisodeImg from "../assets/img/Default.webp";

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
                <h2><b>Episodio #: </b>Próximamente...</h2>
                <div className="episode-txt-extra">
                    <div className="episode-txt-date">
                        <FaRegCalendar />
                        ##/##/####
                    </div>
                    <div className="episode-txt-duration">
                        <MdOutlineWatchLater />
                        ## min
                    </div>
                </div>
                <p>
                    Próximamente...
                </p>
                <div className="episode-btns">
                    <Link to="#" className="btn-episode btn-episode--spotify">
                        <FaSpotify />
                        Spotify
                    </Link>
                    <Link to="#" className="btn-episode btn-episode--youtube">
                        <FaYoutube />
                        Youtube
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export { EpisodeCard }