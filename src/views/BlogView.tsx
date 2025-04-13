// View components
import { BlogBanner } from "../components/BlogBanner"
import { Footer } from "../components/Footer"
import { StoriesGallery } from "../components/StoriesGallery"

const BlogView = () => {
    return (
        <>
            <BlogBanner />
            <StoriesGallery />
            <Footer />
        </>
    )
}

export default BlogView