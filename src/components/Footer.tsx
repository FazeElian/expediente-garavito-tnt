// Styles
import "../assets/css/components/Footer.css";

// React Icons
import { FaTwitter, FaInstagram, FaSpotify } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

// Framer motion
import { motion } from "motion/react";

const Footer = () => {
    return (
        <footer className="footer">
            <h2>La historia continúa... Conéctate con nosotros.</h2>
            <div className="footer-group">
                <motion.a
                    href="https://www.youtube.com/@ExpedienteGaravito"
                    className="footer-item"
                    whileHover={{ scale: 1.1 }}
                    transition={{
                        duration: .25,
                    }}
                >
                    <BsYoutube />
                    Youtube
                </motion.a>
                <motion.a
                    href="https://x.com/Expediente49819"
                    className="footer-item"
                    whileHover={{ scale: 1.1 }}
                    transition={{
                        duration: .25,
                    }}
                >
                    <FaTwitter />
                    Twitter - X
                </motion.a>
                <motion.a
                    href="https://www.instagram.com/expediente_garavito.tnt/"
                    className="footer-item"
                    whileHover={{ scale: 1.1 }}
                    transition={{
                        duration: .25,
                    }}
                >
                    <FaInstagram />
                    Instagram
                </motion.a>
                <motion.a
                    href="https://open.spotify.com/show/0uqR8ztFNWSiv9Rc2pT7KT"
                    className="footer-item"
                    whileHover={{ scale: 1.1 }}
                    transition={{
                        duration: .25,
                    }}
                >
                    <FaSpotify />
                    Spotify
                </motion.a>
            </div>
        </footer>
    )
}

export { Footer };