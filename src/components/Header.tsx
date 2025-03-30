import { useState } from "react";

// Styles
import "../assets/css/components/Header.css";

// Images - icons
import Logo from "../assets/img/Logo.png";

// React icons
import { RiMenu3Line } from "react-icons/ri";

const Header = () => {
    const [ menu, setMenu ] = useState(false)

    const handleMenu = () => {
        setMenu(!menu)
    }

    return (
        <header className="header">
            <ul className="navbar">
                <li className="navbar-item">Inicio</li>
                <li className="navbar-item">Blog</li>
                <li className="navbar-item navbar-item-img">
                    <img src={Logo} alt="" />
                </li>
                <li className="navbar-item">Episodios</li>
                <li className="navbar-item">Contacto</li>
                <li className="navbar-item navbar-item-menu">
                    <button className="btn-menu" onClick={handleMenu}>
                        <RiMenu3Line />
                    </button>
                </li>
            </ul>
            <ul className={ `navbar-mobile ${menu ? "active" : ""}` }>
                <h2>Menú:</h2>
                <li className="navbar-mobile-item">Inicio</li>
                <li className="navbar-mobile-item">Blog</li>
                <li className="navbar-mobile-item">Episodios</li>
                <li className="navbar-mobile-item">Contacto</li>
            </ul>
        </header>
    )
}

export { Header };