// Styles
import { Link } from "react-router-dom";
import "../assets/css/components/StoryForm.css";

// React icons
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoWarningOutline } from "react-icons/io5";

const ShareStoryView = () => {
    return (
        <section className="share-story">
            <div className="top-share-story">
                <Link to="/blog" className="btn-come-back">
                    <FaArrowLeftLong />
                </Link>
            </div>
            <div className="warning-story">
                <div className="warning-icon">
                    <IoWarningOutline />
                </div>
                <h1>Advertencia</h1>
                <p>
                    Estás a punto de entrar en un espacio donde puedes compartir tus experiencias más oscuras.
                    Lo inexplicable, lo aterrador, lo sobrenatural... todo es bienvenido aquí.
                </p>
            </div>
        </section>
    )
}

export default ShareStoryView