// Components
import { Header } from "./components/Header"
import { Banner } from "./components/Banner"
import { About } from "./components/About"
import { EpisodesGallery } from "./components/EpisodesGallery"
import { ArchiveWhispers } from "./components/ArchiveWhispers"
import { Footer } from "./components/Footer"

function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <EpisodesGallery />
      <ArchiveWhispers />
      <Footer />
    </>
  )
}

export default App