import { Link } from "react-router-dom";

// Styles
import "../assets/css/components/Banner.css";

// React icons
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

// React scroll
import { Link as LinkScroll } from "react-scroll";

const BlogBanner = () => {
    return (
        <section className="banner banner-blog">
            <h1>Cuéntanos tu historia</h1>
            <h2>Lo que ocurrió en la Escuela… no todos se atreven a contarlo.</h2>
            <div className="banner-btns">
                <Link to="/share-story" className="btn-banner btn-banner--purple">
                    Comparte tu historia
                </Link>
            </div>
            <LinkScroll
                to="stories" 
                className="banner-btn-scroll"
                spy={true} 
                smooth={true} 
                offset={-300} 
                duration={400}
            >
                <HiOutlineChevronDoubleDown />
            </LinkScroll>
        </section>
    )
}

export { BlogBanner };