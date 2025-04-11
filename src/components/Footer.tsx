// Styles
import "../assets/css/components/Footer.css";

// React Icons
import { FaTwitter, FaInstagram, FaSpotify } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

// Framer motion
import { motion } from "motion/react";

const Footer = () => {
    return (
        <footer className="footer">
            <h2>La historia continúa... Conéctate con nosotros.</h2>
            <div className="footer-group">
                <motion.a
                    href="#"
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
                    href="#"
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
                    href="#"
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
                    href="#"
                    className="footer-item"
                    whileHover={{ scale: 1.1 }}
                    transition={{
                        duration: .25,
                    }}
                >
                    <FaSpotify />
                    Spotify
                </motion.a>
                <motion.a
                    href="#"
                    className="footer-item"
                    whileHover={{ scale: 1.1 }}
                    transition={{
                        duration: .25,
                    }}
                >
                    <IoMdMail />
                    Mail
                </motion.a>
            </div>
        </footer>
    )
}

export { Footer };