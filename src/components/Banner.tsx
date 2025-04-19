// Styles
import "../assets/css/components/Banner.css";

// React icons
import { MdHeadphones, MdNavigateNext } from "react-icons/md";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

// React scroll
import { Link as LinkScroll } from "react-scroll";

const Banner = () => {
    return (
        <section className="banner">
            <h1>Expediente Garavito</h1>
            <div className="banner-btns">
                <a href="#" className="btn-banner btn-banner--purple">
                    <MdHeadphones />
                    Escuchar Ahora
                </a>
                <LinkScroll
                    to="episodes"
                    className="btn-banner btn-banner--black"
                    spy={true} 
                    smooth={true} 
                    offset={-300} 
                    duration={500}
                >
                    Ver episodios
                    <MdNavigateNext />
                </LinkScroll>
            </div>
            <LinkScroll
                to="about" 
                className="banner-btn-scroll"
                spy={true} 
                smooth={true} 
                offset={-150} 
                duration={400}
            >
                <HiOutlineChevronDoubleDown />
            </LinkScroll>
        </section>
    )
}

export { Banner };