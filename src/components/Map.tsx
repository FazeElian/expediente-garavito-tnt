// Styles
import "../assets/css/components/Map.css";

// Images - icons
import MapImg from "../assets/img/Map.jpg";
import { LiaMapMarkedAltSolid } from "react-icons/lia";

// Components
import { MapGalleryItem } from "./MapGalleryItem";
import { TitleSection } from "./TitleSection";

const Map = () => {
    return (
        <section className="map">
            <TitleSection
                text="Mapa de Apariciones"
                icon={<LiaMapMarkedAltSolid />}
            />
            <div className="img-map">
                <img src={MapImg} alt="" />
            </div>
            <div className="gallery-map">
                <MapGalleryItem />
                <MapGalleryItem />
                <MapGalleryItem />
                <MapGalleryItem />
                <MapGalleryItem />
                <MapGalleryItem />
            </div>
        </section>
    )
}

export { Map }