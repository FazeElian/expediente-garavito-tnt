// Styles
import "../assets/css/components/Footer.css";

// React Icons
import { FaTwitter, FaInstagram, FaSpotify } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="footer">
            <h2>La historia continúa... Conéctate con nosotros.</h2>
            <div className="footer-group">
                <a href="#" className="footer-item">
                    <BsYoutube />
                    Youtube
                </a>
                <a href="#" className="footer-item">
                    <FaTwitter />
                    Twitter - X
                </a>
                <a href="#" className="footer-item">
                    <FaInstagram />
                    Instagram
                </a>
                <a href="#" className="footer-item">
                    <FaSpotify />
                    Spotify
                </a>
                <a href="#" className="footer-item">
                    <IoMdMail />
                    Mail
                </a>
            </div>
        </footer>
    )
}

export { Footer };