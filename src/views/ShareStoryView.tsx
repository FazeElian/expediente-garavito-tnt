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
    const [ form, setForm ] = useState(false);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setBtnContinue(true)
        }, 5000)

        return () => clearTimeout(timeOut)
    }, [])

    const disableIntro = () => {
        setIntro(false)
        setBtnContinue(false)
        setForm(true)
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
            <form className={ `form-share-story ${form ? "active" : ""}` }>
                <h1>Comparte tu historia</h1>
                <div className="form-group">
                    <label htmlFor="title">Título de la historia</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Ponle título a tu experiencia inexplicable."
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Tu Nombre</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Mantén tu identidad… o no."
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="story">Historia</label>
                    <textarea
                        name="story"
                        id="story"
                        placeholder="Describe lo que viviste... aunque nadie te crea."
                    />
                </div>
                <button className="btn-submit-story" type="submit">
                    Compartir historia
                </button>
            </form>
        </section>
    )
}

export default ShareStoryView