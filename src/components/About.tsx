// Styles
import "../assets/css/components/About.css";

// Image
import AboutImg from "../assets/img/About.jpg";

// Components
import { TitleSection } from "./TitleSection";

// React scroll
import { Element } from "react-scroll";

const About = () => {
    return (
        <Element name="about" className="about">
            <div className="about-img">
                <img src={AboutImg} alt="Acerca del proyecto" />
            </div>
            <div className="about-txt">
                <TitleSection
                    icon={<></>}
                    text="Oscuridad Entre Muros"
                />
                <p>
                    Sumérgete en una recopilación estremecedora de relatos: estudiantes que rompieron el silencio para contar
                    lo que nunca debió salir a la luz.

                    <br/><br/>
                    Lo que comenzó como simples rumores terminó siendo una pesadilla colectiva: puertas que se abren solas,
                    voces en los pasillos vacíos, desapariciones inexplicables y rituales ocultos entre las paredes de la institución.
                </p>
            </div>
        </Element>
    )
}

export { About };