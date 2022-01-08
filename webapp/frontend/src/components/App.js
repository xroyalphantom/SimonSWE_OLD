import React from "react";
import HomePage from './HomePage';
import ProjectsPage from "./ProjectsPage";
import ExperiencePage from "./ExperiencePage";
import NavBar from "./NavBar";
import ScrollToTop from "./ScrollToTop";
import { 
    BrowserRouter as Router, 
    Routes, 
    Route
} from "react-router-dom";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <NavBar />
            <Routes>
                <Route path="" element={<HomePage />} />
                <Route path="home" element={<HomePage />} />
                <Route path="experience" element={<ExperiencePage />} />
                <Route path="projects" element={<ProjectsPage />} />
            </Routes>
            {//<Footer />
            }
        </Router>
    );
}

export default App