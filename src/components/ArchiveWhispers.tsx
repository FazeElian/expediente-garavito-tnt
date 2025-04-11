// Styles
import "../assets/css/components/ArchiveWhispers.css";

// Components
import { TitleSection } from "./TitleSection";

// Framer motion
import { motion } from "motion/react";

const ArchiveWhispers = () => {
    return (
        <>
            <TitleSection
                icon={<></>}
                text="Susurros del archivo"
            />
            <section className="archive-whispers">
                <motion.div
                    className="whispers-item"
                    whileHover={{ scale: 1.1 }}
                    transition={{
                        duration: .25,
                    }}
                >
                    <h2>
                        “Siento que me persigue a donde vaya, incluso fuera de la universidad”
                    </h2>
                    <h3>Ep1</h3>
                </motion.div>
                <motion.div
                    className="whispers-item"
                    whileHover={{ scale: 1.1 }}
                    transition={{
                        duration: .25,
                    }}
                >
                    <h2>
                        “Siento que me persigue a donde vaya, incluso fuera de la universidad”
                    </h2>
                    <h3>Ep1</h3>
                </motion.div>
                <motion.div
                    className="whispers-item"
                    whileHover={{ scale: 1.1 }}
                    transition={{
                        duration: .25,
                    }}
                >
                    <h2>
                        “Siento que me persigue a donde vaya, incluso fuera de la universidad”
                    </h2>
                    <h3>Ep1</h3>
                </motion.div>
            </section>
        </>
    )
}

export { ArchiveWhispers }