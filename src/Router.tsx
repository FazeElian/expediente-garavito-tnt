import { BrowserRouter, Route, Routes } from "react-router-dom";

// Header component
import { Header } from "./components/Header";

// Views components
import HomeView from "./views/HomeView";
import BlogView from "./views/BlogView";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Header />}>
                    <Route index element={<HomeView />} />
                    <Route path="/blog" element={<BlogView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;