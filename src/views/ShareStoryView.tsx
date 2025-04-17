import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Styles
import "../assets/css/components/StoryForm.css";

// React icons
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoWarningOutline } from "react-icons/io5";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const ShareStoryView = () => {
    const [ intro, setIntro ] = useState(false);
    const [ btnContinue, setBtnContinue ] = useState(false);
    const [ form, setForm ] = useState(true);

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

    const fileInputRef = useRef(null);
    const [fileName, setFileName] = useState('');
  
    const handleButtonClick = () => {
        fileInputRef.current.click();
    };
  
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFileName(selectedFile.name);
        } else {
            setFileName('');
        }
    };

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
                    <label htmlFor="image">La fotografía del evento...</label>
                    <button onClick={handleButtonClick} type="button">
                        {fileName ? "La imagen se ha cargado" : "Seleccionar Imagen"}
                    </button>
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: "none" }}
                        onChange={handleFileChange}
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