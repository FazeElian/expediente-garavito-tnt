import { Link } from "react-router-dom";
import { motion } from "motion/react";

const MapGalleryItem = () => {
    return (
        <motion.a
            className="item-gallery-map"
            href="#"
            whileHover={{ scale: 1.05 }}
            transition={{
                duration: .2,
            }}
        >
            <div className="top-item-gallery-map">
                <div className="circle-top-item-gallery-map">
                    1
                </div>
                <h1>Edificio C</h1>
            </div>
            <p>Hogar del profesor desaparecido y el ascensor que desciende a la nada.</p>
            <Link to="#">Leer más</Link>
        </motion.a>
    )
}

export { MapGalleryItem };