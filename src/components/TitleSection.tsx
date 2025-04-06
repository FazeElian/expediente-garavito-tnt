// Styles
import "../assets/css/components/TitleSection.css";

// Props type
type TitleSectionProps = {
    icon: React.ReactElement,
    text: string
}

const TitleSection = ({ icon, text } : TitleSectionProps) => {
    return (
        <div className="title-section">
            { icon }
            { text }
        </div>
    )
}

export { TitleSection }