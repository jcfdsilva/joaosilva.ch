import React from 'react';
import { NavLink, useLocation} from 'react-router-dom';
import { translations } from '../translations';

const PROJECT_ROUTES = [
    '/pinchbot',
    '/research_blog',
    '/citiwatts',
    '/it_management',
    '/prettynicky',
    '/pinchsmall',
  ];

function Navbar({ language, setLanguage }) {
  const location = useLocation();
  const isProjectPage = PROJECT_ROUTES.includes(location.pathname);
  const homeTo = isProjectPage ? '/?tab=resume' : '/';
  
  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink
          to={homeTo}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          {translations[language].nav.home}
        </NavLink>
        <NavLink
          to="https://research.joaosilva.ch"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          {translations[language].nav.research}
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          {translations[language].nav.contact}
        </NavLink>

        <div id="language-selector">
          <svg
            id="language-selector-svg"
            width="26px"
            height="26px"
            viewBox="-51.2 -51.2 614.40 614.40"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ecb29f"
            stroke="#ecb29f"
            aria-label="Language selector"
          >
            {/* camelCase SVG attributes to avoid React warnings */}
            <defs>
              <filter id="shadow">
                <feDropShadow
                  dx="20"
                  dy="20"
                  stdDeviation="20"
                  floodColor="rgba(0, 0, 0, 0.6)"
                />
              </filter>
            </defs>
            <g id="SVGRepo_iconCarrier" filter="url(#shadow)">
              <g
                id="icon"
                fill="#ecb29f"
                strokeWidth="0.00512"
                fillRule="evenodd"
                transform="translate(42.666667, 85.333333)"
              >
                <path d="M426.666667,85.3333333 L426.666667,341.333333 L362.626302,341.333333 L362.666667,405.333333 L256,341.333333 L170.666667,341.333333 L170.666667,85.3333333 L426.666667,85.3333333 Z M256,1.42108547e-14 L256,64 L213.333,64 L213.333333,42.6666667 L42.6666667,42.6666667 L42.6666667,213.333333 L149.333,213.333 L149.333,268.8 L64,320 L64.0403648,256 L6.39488462e-14,256 L6.39488462e-14,1.42108547e-14 L256,1.42108547e-14 Z M384,128 L213.333333,128 L213.333333,298.666667 L384,298.666667 L384,128 Z M311.198683,149.333333 L359.616467,277.333333 L335.768901,277.333333 L322.580475,240.658669 L274.524018,240.658669 L261.425923,277.333333 L238.933333,277.333333 L286.267137,149.333333 L311.198683,149.333333 Z M298.552247,170.741943 C296.817878,176.812232 294.528512,183.826018 291.684148,191.7833 L291.325712,192.782875 L280.576241,223.134321 L316.43792,223.134321 L305.68845,192.782875 L304.747024,190.067278 C302.566831,183.717713 300.501905,177.275935 298.552247,170.741943 Z M138.364283,55.8724491 L138.363691,66.5384491 L149.332691,66.5384491 L149.334032,145.217282 C147.846623,148.082062 146.253419,150.895209 144.554383,153.656286 C146.072758,154.996689 147.66531,156.330498 149.332056,157.657476 L149.332744,183.9067 C142.782625,179.623374 136.879514,175.218148 131.623873,170.685181 C117.063661,186.063317 97.230366,196.963418 72.3795207,203.419113 L66.0115407,204.951778 L61.383691,184.126454 C85.6428706,178.735525 103.970928,169.143885 116.711981,155.39526 C105.111587,141.185042 96.9168733,125.119906 92.1670974,107.291622 L90.6021236,100.779065 L111.459775,96.2991661 C114.703867,111.403107 120.706878,124.963276 129.507523,137.067333 C137.440289,122.406679 142.049701,106.041819 143.329049,87.8734181 L63.6976158,87.8724491 L63.6976158,66.5391157 L117.030691,66.5384491 L117.030949,55.8724491 L138.364283,55.8724491 Z" />
              </g>
            </g>
          </svg>

          <div id="language-selector-menu">
            <button
              className={language === 'en' ? 'active' : ''}
              onClick={() => setLanguage('en')}
            >
              English
            </button>
            <button
              className={language === 'fr' ? 'active' : ''}
              onClick={() => setLanguage('fr')}
            >
              Français
            </button>
            <button
              className={language === 'pt' ? 'active' : ''}
              onClick={() => setLanguage('pt')}
            >
              Português
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;