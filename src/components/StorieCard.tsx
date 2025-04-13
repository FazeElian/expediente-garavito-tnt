// Episode example img
import EpisodeImg from "../assets/img/Episode.jpg";

// React icons
import { FaRegCalendar } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";

// Framer motion
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const StorieCard = () => {
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
                <h2>El Susurro que Ningún Estudiante Quiso Escuchar en la Biblioteca</h2>
                <div className="episode-txt-extra">
                    <div className="episode-txt-date">
                        <FaRegCalendar />
                        22/03/2025
                    </div>
                    <div className="episode-txt-duration">
                        <MdOutlineWatchLater />
                        Hace 15 min
                    </div>
                </div>
                <p>
                    <b>Autor: </b> Anónimo
                </p>
                <div className="cont-read-more">
                    <Link to="#" className="read-more">Leer más</Link>
                </div>
            </div>
        </motion.div>
    )
}

export { StorieCard }