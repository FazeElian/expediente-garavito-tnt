import { useEffect, useState } from "react";

// Styles
import { Link } from "react-router-dom";
import "../assets/css/components/StoryForm.css";

// React icons
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoWarningOutline } from "react-icons/io5";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const ShareStoryView = () => {
    const [ intro, setIntro ] = useState(true);
    const [ btnContinue, setBtnContinue ] = useState(false);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setBtnContinue(true)
        }, 5000)

        return () => clearTimeout(timeOut)
    }, [])

    const disableIntro = () => {
        setIntro(false)
        setBtnContinue(false)
    }

    return (
        <section className="share-story">
            <div className="top-share-story">
                <Link to="/blog" className="btn-come-back">
                    <FaArrowLeftLong />
                </Link>
            </div>
            <div className={`warning-story ${intro ? "" : "disabled"}`}>
                <div className="warning-icon">
                    <IoWarningOutline />
                </div>
                <h1>Advertencia</h1>
                <p>
                    Estás a punto de entrar en un espacio donde puedes compartir tus experiencias más oscuras.
                    Lo inexplicable, lo aterrador, lo sobrenatural... todo es bienvenido aquí.
                </p>
            </div>
            <button className={ `btn-continue ${btnContinue ? "" : "active"}` } onClick={disableIntro}>
                Continuar
                <MdOutlineKeyboardDoubleArrowRight />
            </button>
        </section>
    )
}

export default ShareStoryView