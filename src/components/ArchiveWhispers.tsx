// Styles
import "../assets/css/components/ArchiveWhispers.css";

// Components
import { TitleSection } from "./TitleSection";

// Framer motion
import { motion } from "motion/react";

const ArchiveWhispers = () => {
    const ArchiveWhispersList = [
        {
            id: 1,
            text: "Desde que comenzó el semestre, no he podido dormir… y no es por estrés",
            ep: 1
        },
        {
            id: 2,
            text: "Dijo que si resolvía esa ecuación, lo sabría todo… murió esa misma noche",
            ep: 2
        },
        {
            id: 3,
            text: "Encontré sus cartas... y desde entonces, los murmullos no paran.",
            ep: 2
        }
    ]

    return (
        <>
            <TitleSection
                icon={<></>}
                text="Susurros del archivo"
            />
            <section className="archive-whispers">
                {ArchiveWhispersList.map((item) => (
                    <motion.div
                        key={ item.id }
                        className="whispers-item"
                        whileHover={{ scale: 1.1 }}
                        transition={{
                            duration: .25,
                        }}
                    >
                        <h2>
                            “{ item.text }”
                        </h2>
                        <h3>Ep1</h3>
                    </motion.div>
                ))}
            </section>
        </>
    )
}

export { ArchiveWhispers }