import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

// Styles
import "../assets/css/components/StoryForm.css";

// React icons
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoWarningOutline } from "react-icons/io5";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

// Form management
import { useForm } from "react-hook-form";

// Type
import { StoryForm } from "../types/type";

// API Call
import { newStory } from "../api/api";

// Hook for title
import { useDocumentTitle } from "../hooks/useDocumentTitle"

const ShareStoryView = () => {
    useDocumentTitle("Compartir relato")

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

    // Handle input for image field
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = useState<string>("");
  
    const handleClick = () => {
        fileInputRef.current?.click();
    };
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setFileName(file.name);
        } else {
            setFileName("");
        }
    };

    // Form handle - validation
    const initialValues = {
        title: "",
        author: "",
        image: "",
        content: "",
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm ({
        defaultValues: initialValues
    });

    const navigate = useNavigate()

    const handleNewStory= async (formData: StoryForm) => {
        const imageObtained = formData.image[0]
        const data: StoryForm = {
            title: formData.title,
            author: formData.author,
            image: imageObtained,
            content: formData.content,
        };

        newStory(data);

        // Clean form
        reset()

        navigate("/blog")
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
            <form
                action=""
                className={ `form-share-story ${form ? "active" : ""}` }
                method="post"
                onSubmit={handleSubmit(handleNewStory)}
            >
                <h1>Comparte tu historia</h1>
                <div className="form-group">
                    <label htmlFor="title">Título de la historia</label>
                    <input
                        type="text"
                        placeholder="Ponle título a tu experiencia inexplicable."
                        {...register("title", {
                            required: "Debes darle nombre a tu experiencia",
                            pattern: {
                                value: /^[a-zA-Z0-9áéíóúÁÉÍÓÚ\s-]+$/,
                                message: "Sólo se permiten letras, números y guiones."
                            },
                            minLength: {
                                value: 10,
                                message: "El título debe tener al menos 10 caracteres."
                            }
                        })}
                    />
                    {errors.title && 
                        <p style={{ color: "#FF0033" }}>
                            {errors.title?.message}
                        </p>
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="name">Tu Nombre</label>
                    <input
                        type="text"
                        placeholder="Mantén tu identidad… o no."
                        {...register("author", {
                            pattern: {
                                value: /^[a-zA-Z0-9áéíóúÁÉÍÓÚ\s-]+$/,
                                message: "Sólo se permiten letras, números y guiones."
                            }
                        })}
                    />
                    {errors.author && 
                        <p style={{ color: "#FF0033" }}>
                            {errors.author?.message}
                        </p>
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="image">La fotografía del evento...</label>
                    <button className="custom-file-button" onClick={handleClick} type="button">
                        {fileName ? "Imagen cargada" : "Seleccionar Archivo"}
                    </button>
                    <input
                        type="file"
                        style={{ display: "none" }}
                        {...register("image", {
                            required: "Debes subir una foto del evento",
                            onChange: handleChange,
                        })}
                        ref={(e) => {
                            fileInputRef.current = e;
                            register("image").ref(e);
                        }}
                    />
                    {errors.image && 
                        <p style={{ color: "#FF0033" }}>
                            {errors.image?.message}
                        </p>
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="story">Historia</label>
                    <textarea
                        id="story"
                        placeholder="Describe lo que viviste... aunque nadie te crea."
                        {...register("content", {
                            required: "Debes escribir tu experiencia",
                            minLength: {
                                value: 30,
                                message: "La historia debe tener al menos 30 caracteres."
                            }
                        })}
                    />
                    {errors.content && 
                        <p style={{ color: "#FF0033" }}>
                            {errors.content?.message}
                        </p>
                    }
                </div>
                <button className="btn-submit-story" type="submit">
                    Compartir historia
                </button>
            </form>
        </section>
    )
}

export default ShareStoryView