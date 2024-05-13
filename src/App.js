import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import Home from "./Pages/Home/Homescreen"
import Navbar from "./Pages/Home/NavBar";
import HeroSection from "./Pages/Home/HeroSection";

function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<HeroSection />}></Route>
                        <Route path="*" element={<div>404 Not Found</div>}></Route>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
