import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Home from './pages/Home';
import MobileHome from './pages/MobileHome';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Navbar from './components/Navbar';
import DisclaimerModal from './components/DisclaimerModal';

function App() {
    const [language, setLanguage] = useState('en');
    const cursorRef = useRef(null);
    const followerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1000);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (isMobile) return; // cursor/follower don't exist on mobile

        const cursor = document.getElementById("cursor");
        const follower = document.getElementById("cursor-follower");
        if (!cursor || !follower) return;

        let mouseX = 0;
        let mouseY = 0;
        let followerX = 0;
        let followerY = 0;
        let rafId;

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            cursor.style.left = `${mouseX - cursor.offsetWidth / 2}px`;
            cursor.style.top = `${mouseY - cursor.offsetHeight / 2}px`;

            const speed = Math.sqrt(e.movementX ** 2 + e.movementY ** 2);
            const size = Math.min(20 + speed * 0.5, 40);
            cursor.style.width = `${size}px`;
            cursor.style.height = `${size}px`;
        };

        const updateFollower = () => {
            const dx = mouseX - followerX;
            const dy = mouseY - followerY;

            followerX += dx * 0.2;
            followerY += dy * 0.2;

            follower.style.left = `${followerX - follower.offsetWidth / 2}px`;
            follower.style.top = `${followerY - follower.offsetHeight / 2}px`;

            rafId = requestAnimationFrame(updateFollower);
        };

        document.addEventListener('mousemove', handleMouseMove);
        rafId = requestAnimationFrame(updateFollower);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(rafId);
        };
    }, [isMobile]);

    return (
        <>
            <BrowserRouter>
            <div className="App">
                <Navbar language={language} setLanguage={setLanguage} />
                <Routes>
                <Route
                    path="/"
                    element={
                        isMobile
                            ? <MobileHome language={language} />
                            : <Home language={language} />
                    }
                />
                <Route path="/portfolio" element={<Portfolio language={language} />} />
                <Route path="/contact" element={<Contact language={language} />} />
                <Route path="/pinchbot" element={<Project language={language} project="pinchbot"/>} />
                <Route path="/research_blog" element={<Project language={language} project="research_blog" />} />
                <Route path="/citiwatts" element={<Project language={language} project={"citiwatts"}/>} />
                <Route path="/it_management" element={<Project language={language} project="it_management" />} />
                <Route path="/prettynicky" element={<Project language={language} project="prettynicky" />} />
                <Route path="/pinchsmall" element={<Project language={language} project="pinchsmall" />} />
                </Routes>
                {!isMobile && (
                    <>
                        <div className="cursor" id="cursor"></div>
                        <div className="cursor-follower" id="cursor-follower"></div>
                    </>
                )}
            </div>
            </BrowserRouter>
            <DisclaimerModal language={language} />
        </>
    );
}

export default App;