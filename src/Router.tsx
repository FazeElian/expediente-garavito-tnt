import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Header component
import { Header } from "./components/Header";

// Views components
const HomeView = lazy(() => import("./views/HomeView"));
const BlogView = lazy(() => import("./views/BlogView"));
const ShareStoryView = lazy(() => import("./views/ShareStoryView"));
const StoryView = lazy(() => import("./views/StoryView"));

function Router() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Cargando...</div>}>
                <Routes>
                    <Route element={<Header />}>
                        <Route index element={<HomeView />} />
                        <Route path="/blog" element={<BlogView />} />
                    </Route>
                    <Route path="/share-story" element={<ShareStoryView />} /> 
                    <Route path="/blog/:id" element={<StoryView />} /> 
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default Router;