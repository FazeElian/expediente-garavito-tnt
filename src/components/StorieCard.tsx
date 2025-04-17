// Episode example img
import EpisodeImg from "../assets/img/Episode.jpg";

// React icons
import { FaRegCalendar } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";

// Framer motion
import { motion } from "motion/react";
import { Link } from "react-router-dom";

// Type
import { Story } from "../types/type";

// Date formats & othef utils
import { formatDate } from "../utils/formatDate";
import { timeAgo } from "../utils/timeAgo";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";

const StorieCard = (props: Story) => {
    return (
        <motion.div
            className="episode-card"
            key={props.id}
            whileHover={{ scale: 1.1 }}
            transition={{
                duration: .25,
            }}
        >
            <div className="episode-img">
                <img src={EpisodeImg} alt="" />
            </div>
            <div className="episode-txt">
                <h2>{props.title}</h2>
                <div className="episode-txt-extra">
                    <div className="episode-txt-date">
                        <FaRegCalendar />
                        {formatDate(props.createdAt)}
                    </div>
                    <div className="episode-txt-duration">
                        <MdOutlineWatchLater />
                        {capitalizeFirstLetter(timeAgo(props.createdAt))}
                    </div>
                </div>
                <p>
                    <b>Autor: </b> {props.author}
                </p>
                <div className="cont-read-more">
                    <Link to="#" className="read-more">Leer más</Link>
                </div>
            </div>
        </motion.div>
    )
}

export { StorieCard }