import { useState, useEffect } from 'react';
import { translations } from '../translations';
import Resume from '../components/Resume';

function Home({ language }) {
    const [scrollDirection, setScrollDirection] = useState("up"); // Tracks the direction: "up" or "down"

    useEffect(() => {
        let lastScrollY = 0; // Stores the last scroll position for comparison

        const handleScroll = (event) => {
            event.preventDefault(); 

            const deltaY = event.deltaY || 0;
            const touchY = event.touches?.[0]?.clientY || 0;

            if (event.type === "touchmove" && lastScrollY) {
                setScrollDirection(touchY > lastScrollY ? "up" : "down");
                lastScrollY = touchY;
            } else if (event.type === "wheel") {
                setScrollDirection(deltaY < 0 ? "up" : "down");
            }
        };

        window.addEventListener("wheel", handleScroll, { passive: false });
        window.addEventListener("touchstart", (e) => {
            lastScrollY = e.touches?.[0]?.clientY || 0;
        });
        window.addEventListener("touchmove", handleScroll, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleScroll);
            window.removeEventListener("touchstart", (e) => {
                lastScrollY = e.touches?.[0]?.clientY || 0;
            });
            window.removeEventListener("touchmove", handleScroll);
        };
    }, []);


    return (
        <div className={`home ${scrollDirection}`}>
            <div className="banner">
                <div className="text">
                    <h1>{translations[language].home.title}</h1>
                    <p>{translations[language].home.description}</p>
                </div>
                <div className={`pic`}>
                    <div className="frame-container">
                        <div className="liquid-background"></div>
                        <div className="liquid-frame">
                            <img src="img.jpeg" alt="Liquid Frame Example"></img>
                        </div>
                    </div>
                </div>
            </div>
            <Resume language={language} scrollDirection={scrollDirection} setScrollDirection={setScrollDirection}/>
        </div>
    );
}

export default Home;
