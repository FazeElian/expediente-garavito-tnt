import { Link } from "react-router-dom"

// Styles
import "../assets/css/components/NotFound.css";

// React icons
import { FaArrowLeft } from "react-icons/fa6";

const NotFoundView = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <h2>Expediente no encontrado</h2>
            <Link to="/" className="btn-not-found">
                <FaArrowLeft />
                Volver a inicio
            </Link>
        </div>
    )
}

export default NotFoundView