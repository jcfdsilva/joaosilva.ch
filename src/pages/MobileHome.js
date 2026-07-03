import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { translations } from '../translations';
import { HobbiesSection } from '../components/HobbiesSection';

const TABS = [
    { id: 'profile', label: 'Profile', icon: 
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
        </svg>
    },
    { id: 'resume', label: 'Resume', icon:
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
            <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
            <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
        </svg>
    },
    { id: 'hobbies', label: 'Hobbies', icon: 
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-emoji-smile" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
        </svg>
     },
];

function MobileHome({ language }) {
    const [activeTab, setActiveTab] = useState('profile');
    const [openWork, setOpenWork] = useState(null);
    const navigate = useNavigate();
    const t = translations[language].home;

    return (
        <div className="mobile-home">
            <div className="mobile-screen">
                {activeTab === 'profile' && (
                    <div className="mobile-tab mobile-profile">
                        <div className="frame-container">
                            <div className="liquid-background"></div>
                            <div className="liquid-frame">
                                <img src="img.jpeg" alt="Liquid Frame Example"></img>
                            </div>
                        </div>
                        <h1 className="mobile-title">{t.title}</h1>
                        <p className="mobile-desc">{t.description}</p>
                    </div>
                )}

                {activeTab === 'resume' && (
                    <div className="mobile-tab mobile-resume">
                        <section className="mobile-section">
                            <h2 className="mobile-section-title">{t.resume.experience}</h2>
                            <div className="mobile-portfolio-list">
                                {t.resume.portfolio.map((item) => (
                                    <button
                                        key={item.id}
                                        className="mobile-portfolio-card"
                                        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${item.background})` }}
                                        onClick={() => navigate(item.href)}
                                    >
                                        <span className="mobile-portfolio-card-title">{item.title}</span>
                                    </button>
                                ))}
                            </div>
                        </section>

                        <section className="mobile-section">
                            <h2 className="mobile-section-title">{t.resume.info}</h2>

                            <h3 className="mobile-subheading">{t.resume.diplomas_subtitle}</h3>
                            <div className="mobile-diploma-list">
                                {t.resume.diplomas.map((item, index) => (
                                    <div className="mobile-diploma-card" key={"m-diploma-" + index}>
                                        <p className="mobile-diploma-area">{item.area}</p>
                                        <p className="mobile-diploma-cert">{item.certificate}</p>
                                        <p className="mobile-diploma-school">{item.school} ({item.year})</p>
                                    </div>
                                ))}
                            </div>

                            <h3 className="mobile-subheading">{t.resume.work_subtitle}</h3>
                            <div className="mobile-work-list">
                                {t.resume.work.map((item, index) => {
                                    const isOpen = openWork === index;
                                    return (
                                        <div className="mobile-work-card" key={"m-work-" + index}>
                                            <button
                                                className="mobile-work-header"
                                                onClick={() => setOpenWork(isOpen ? null : index)}
                                            >
                                                <div>
                                                    <p className="mobile-work-job">{item.job}</p>
                                                    <p className="mobile-work-company">
                                                        {item.company} ({item.start} - {item.end})
                                                    </p>
                                                </div>
                                                <span className={`mobile-work-chevron ${isOpen ? "open" : ""}`}>⌄</span>
                                            </button>
                                            {isOpen && (
                                                <p className="mobile-work-desc">{item.descripton}</p>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    </div>
                )}

                {activeTab === 'hobbies' && (
                    <div id="mobile-hobbies" className="active mobile-tab mobile-hobbies">
                        <HobbiesSection language={language} />
                    </div>
                )}
            </div>

            <nav className="mobile-tabbar">
                {TABS.map((tab) => (
                    <button
                        key={tab.id}
                        className={`mobile-tabbar-item ${activeTab === tab.id ? "active" : ""}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        <span className="mobile-tabbar-icon">{tab.icon}</span>
                        <span className="mobile-tabbar-label">{tab.label}</span>
                    </button>
                ))}
            </nav>
        </div>
    );
}

export default MobileHome;