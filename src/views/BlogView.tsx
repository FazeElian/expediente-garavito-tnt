// View components
import { BlogBanner } from "../components/BlogBanner"
import { Footer } from "../components/Footer"
import { StoriesGallery } from "../components/StoriesGallery"

// Hook for title
import { useDocumentTitle } from "../hooks/useDocumentTitle"

const BlogView = () => {
    useDocumentTitle("Crónicas del Más Allá")

    return (
        <>
            <BlogBanner />
            <StoriesGallery />
            <Footer />
        </>
    )
}

export default BlogView