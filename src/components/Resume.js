import React, { useState, useEffect } from "react";
import { translations } from '../translations';
import { HobbiesSection } from './HobbiesSection';
import { useNavigate } from 'react-router-dom';

const Experience = ({ language, scrollDirection, setScrollDirection }) => {
    const [activeItem, setActiveItem] = useState([2,3]);
    const [activeMenu, setActiveMenu] = useState("experience");
    const navigate = useNavigate();

    const setMenu = (tab) =>{
        console.log(tab)
        setScrollDirection("down")
        setActiveMenu(tab)
    }

    const handleMouseEnter = (id) => {
        let activeItems = [id];
        activeItem.forEach((element) => {
          if (Math.floor(element / 3) !== Math.floor(id / 3)) {
            activeItems.push(element);
          }
        });
        setActiveItem(activeItems);
    };

    function simulatePendulum(id) {
        const bar = document.getElementById(id);
        const screw = bar.querySelector(".screw p");
        const screwdiv = bar.querySelector(".screw");
        
        // First transformation for the p element inside .screw
        screw.style.transform = "rotate(1440deg)";
        
        // Wait 1 second before applying the transform to the bar
        setTimeout(() => {
            screwdiv.style.opacity="0"
            setTimeout(() => {
                bar.style.transform = "rotateX(90deg)";
            }, 500);
        }, 1000);
    }

    return (
        <div id="resume">
            <div className={`resume-nav`}>
                <button 
                className={`resume-nav-menu ${activeMenu=="experience" && scrollDirection=="down" ?"active":""}`} 
                onClick={() => setMenu('experience')}
                >
                {translations[language].home.resume.experience}
                </button>

                <button 
                className={`resume-nav-menu ${activeMenu=="aboutme" && scrollDirection=="down" ?"active":""}`} 
                onClick={() => setMenu('aboutme')}
                >
                {translations[language].home.resume.info}
                </button>

                <button 
                className={`resume-nav-menu ${activeMenu=="hobbies" && scrollDirection=="down" ?"active":""}`} 
                onClick={() => setMenu('hobbies')}
                >
                {translations[language].home.resume.hobbies_title}
                </button>
            </div>
            <div id="experience" className={activeMenu=="experience"?"active":""}>
                {translations[language].home.resume.portfolio.map((item, index) => (
                    <button
                    key={item.id}
                    id={`experience-${index}`}
                    className={`experience-item ${activeItem.includes(index) ? "active" : ""}`}
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${item.background})`}}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onClick={()=>navigate(item.href)}
                    >
                    <h2 className="title">{item.title}</h2>
                    </button>
                ))}
            </div>
            <div id="aboutme" className={activeMenu=="aboutme"?"active":(activeMenu=="hobbies"?"left":"")}>
                <div id="diplomas">
                    <h1>{translations[language].home.resume.diplomas_subtitle}</h1>
                    {translations[language].home.resume.diplomas.map((item, index) => (
                        <div key={"diploma-"+index}>
                            <h2>{item.area}</h2>
                            <p>{item.certificate}</p>
                            <p>{item.school +" ("+item.year+") "}</p>
                        </div>
                    ))}
                </div>
                <div id="work">
                    <h1>{translations[language].home.resume.work_subtitle}</h1>
                    {translations[language].home.resume.work.map((item, index) => (
                        <div className="work-container" key={"work-" + index}>
                            <div className="work-item">
                                <div onClick={() => simulatePendulum("cover-"+index)} id={"cover-"+index} className="cover">
                                    <div className="screw"><p>x</p></div>
                                    <h2>{item.job}</h2>
                                    <p className="company">{item.company + " (" + item.start + " - " + item.end + ") "}</p>
                                </div>
                                <div className="desc-wrapper">
                                    <p className="desc">{item.descripton}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div id="hobbies" className={activeMenu=="hobbies"?"active":""}>
                <HobbiesSection language={language}/>
            </div>
        </div>
    );};

export default Experience;
