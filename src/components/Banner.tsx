// Styles
import "../assets/css/components/Banner.css";

// React icons
import { MdHeadphones, MdNavigateNext } from "react-icons/md";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

const Banner = () => {
    return (
        <section className="banner">
            <h1>Expediente Garavito</h1>
            <div className="banner-btns">
                <a href="#" className="btn-banner btn-banner--purple">
                    <MdHeadphones />
                    Escuchar Ahora
                </a>
                <a href="#" className="btn-banner btn-banner--black">
                    Ver episodios
                    <MdNavigateNext />
                </a>
            </div>
            <button className="banner-btn-scroll">
                <HiOutlineChevronDoubleDown />
            </button>
        </section>
    )
}

export { Banner };