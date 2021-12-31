import React, { Component } from "react";
import HomePage from './HomePage';
import ProjectsPage from "./ProjectsPage";
import ExperiencePage from "./ExperiencePage";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { 
    BrowserRouter as Router, 
    Routes, 
    Route
} from "react-router-dom";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
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
}