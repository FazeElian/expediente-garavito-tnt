import { BrowserRouter, Route, Routes } from "react-router-dom";

// Header component
import { Header } from "./components/Header";

// Views components
import HomeView from "./views/HomeView";
import BlogView from "./views/BlogView";
import ShareStoryView from "./views/ShareStoryView";
import StoryView from "./views/StoryView";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Header />}>
                    <Route index element={<HomeView />} />
                    <Route path="/blog" element={<BlogView />} />
                </Route>
                <Route path="/share-story" element={<ShareStoryView />} /> 
                <Route path="/blog/:id" element={<StoryView />} /> 
            </Routes>
        </BrowserRouter>
    )
}

export default Router;