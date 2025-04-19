// Components
import { Banner } from "../components/Banner"
import { About } from "../components/About"
import { Map } from "../components/Map"
import { EpisodesGallery } from "../components/EpisodesGallery"
import { ArchiveWhispers } from "../components/ArchiveWhispers"
import { Footer } from "../components/Footer"

const HomeView = () => {
    return (
        <>
            <Banner />
            <About />
            <Map />
            <EpisodesGallery />
            <ArchiveWhispers />
            <Footer />
        </>
    )
}

export default HomeView