// Styles
import "../assets/css/components/ArchiveWhispers.css";

// Components
import { TitleSection } from "./TitleSection";

const ArchiveWhispers = () => {
    return (
        <>
            <TitleSection
                icon={<></>}
                text="Susurros del archivo"
            />
            <section className="archive-whispers">
                <div className="whispers-item">
                    <h2>
                        “Siento que me persigue a donde vaya, incluso fuera de la universidad”
                    </h2>
                    <h3>Ep1</h3>
                </div>
                <div className="whispers-item">
                    <h2>
                        “Siento que me persigue a donde vaya, incluso fuera de la universidad”
                    </h2>
                    <h3>Ep1</h3>
                </div>
                <div className="whispers-item">
                    <h2>
                        “Siento que me persigue a donde vaya, incluso fuera de la universidad”
                    </h2>
                    <h3>Ep1</h3>
                </div>
            </section>
        </>
    )
}

export { ArchiveWhispers }