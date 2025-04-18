import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

// Styles
import "../assets/css/components/Header.css";

// Images - icons
import Logo from "../assets/img/Logo.webp";

// React icons
import { RiMenu3Line } from "react-icons/ri";

// React scroll
import { Link as LinkScroll } from "react-scroll";

const Header = () => {
    const [ menu, setMenu ] = useState(false)

    const handleMenu = () => {
        setMenu(!menu)
    }

    return (
        <>
            <header className="header">
                <ul className="navbar">
                    <Link to="/" className="navbar-item">Inicio</Link>
                    <Link to="/blog" className="navbar-item">Narraciones</Link>
                    <li className="navbar-item navbar-item-img">
                        <img src={Logo} alt="" />
                    </li>
                    <LinkScroll
                        to="episodes"
                        className="navbar-item"
                        spy={true} 
                        smooth={true} 
                        offset={-300} 
                        duration={500}
                    >
                        Episodios
                    </LinkScroll>
                    <li className="navbar-item">Contacto</li>
                    <li className="navbar-item navbar-item-menu">
                        <button className="btn-menu" onClick={handleMenu}>
                            <RiMenu3Line />
                        </button>
                    </li>
                </ul>
                <ul className={ `navbar-mobile ${menu ? "active" : ""}` }>
                    <h2>Menú:</h2>
                    <Link to="/" className="navbar-item">Inicio</Link>
                    <Link to="/blog" className="navbar-item">Narraciones</Link>
                    <LinkScroll
                        to="episodes"
                        className="navbar-mobile-item"
                        spy={true} 
                        smooth={true} 
                        offset={-225} 
                        duration={500}
                    >
                        Episodios
                    </LinkScroll>
                    <li className="navbar-mobile-item">Contacto</li>
                </ul>
            </header>

            <Outlet />
        </>
    )
}

export { Header };