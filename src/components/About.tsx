// Styles
import "../assets/css/components/About.css";

// Image
import AboutImg from "../assets/img/About.jpg";

// Components
import { TitleSection } from "./TitleSection";


const About = () => {
    return (
        <div className="about">
            <div className="about-img">
                <img src={AboutImg} alt="Acerca del proyecto" />
            </div>
            <div className="about-txt">
                <TitleSection
                    icon=""
                    text="Acerca del Proyecto"
                />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit feugiat eros,
                    quis aliquet risus facilisis in. Proin tincidunt urna sed diam volutpat egestas.

                    <br/><br/>
                    Proin ultricies sed eros sed feugiat. Donec sed odio sapien. Fusce facilisis feugiat
                    magna a finibus. Praesent venenatis tempus mi. Aliquam tempus, ipsum ut blandit facilisis.
                </p>
            </div>
        </div>
    )
}

export { About };