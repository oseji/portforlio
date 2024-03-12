import { useState, useEffect, useRef } from "react";

import Intro from "./Intro";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ContactMe from "./ContactMe";

import iconMenu from "./assets/iconMenu.svg";
import iconClose from "./assets/iconClose.svg";

function App() {
  const introTextVariants = {
    hidden: { y: 300 },
    visible: { y: 0, transition: { duration: 0.5 } },
  };

  const projectsVariants = {
    hidden: { scale: 0.7, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  const projectContainerVariants = {
    hidden: { scale: 0.7, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.2 },
    },
  };

  const sliderRef = useRef(null);
  const navRef = useRef(null);

  const [isThemeToggled, setIsThemeToggled] = useState(false);
  const [menu, setMenu] = useState(iconMenu);
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const iconGithub = (
    <svg
      className="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill={isThemeToggled ? "white" : "#000000"}
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const linkSVG = (
    <svg
      stroke="currentColor"
      fill={isThemeToggled ? "white" : "#000000"}
      strokeWidth="0"
      viewBox="0 0 15 15"
      className="cursor-pointer"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 13C12.5523 13 13 12.5523 13 12V3C13 2.44771 12.5523 2 12 2H3C2.44771 2 2 2.44771 2 3V6.5C2 6.77614 2.22386 7 2.5 7C2.77614 7 3 6.77614 3 6.5V3H12V12H8.5C8.22386 12 8 12.2239 8 12.5C8 12.7761 8.22386 13 8.5 13H12ZM9 6.5C9 6.5001 9 6.50021 9 6.50031V6.50035V9.5C9 9.77614 8.77614 10 8.5 10C8.22386 10 8 9.77614 8 9.5V7.70711L2.85355 12.8536C2.65829 13.0488 2.34171 13.0488 2.14645 12.8536C1.95118 12.6583 1.95118 12.3417 2.14645 12.1464L7.29289 7H5.5C5.22386 7 5 6.77614 5 6.5C5 6.22386 5.22386 6 5.5 6H8.5C8.56779 6 8.63244 6.01349 8.69139 6.03794C8.74949 6.06198 8.80398 6.09744 8.85143 6.14433C8.94251 6.23434 8.9992 6.35909 8.99999 6.49708L8.99999 6.49738"
        fill="currentColor"
      ></path>
    </svg>
  );

  const upArrow = (
    <svg
      class="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill={isThemeToggled ? "white" : "black"}
      viewBox="0 0 14 8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
      />
    </svg>
  );

  const toggleMenu = () => {
    const navbar = navRef.current;
    navbar.classList.toggle("hideNav");

    setIsMenuToggled(!isMenuToggled);
    if (isMenuToggled) {
      setMenu(iconMenu);
    } else {
      setMenu(iconClose);
    }
  };

  const toggleTheme = () => {
    setIsThemeToggled(!isThemeToggled);

    const slider = sliderRef.current;
    slider.classList.toggle("translate-x-end");
  };

  return (
    <div className={`App  ${isThemeToggled ? "appDarkMode" : "appLightMode"}`}>
      <header
        className={` ${isThemeToggled ? "headerDarkMode" : "headerLightMode"}`}
      >
        <div className="logoGrp">
          <h1 className="logo">Oseji</h1>

          <img
            src={menu}
            alt="menu"
            className="menuIcon"
            onClick={toggleMenu}
          />
        </div>

        <nav className="hideNav" ref={navRef}>
          <ul className="navList">
            <li className="navText">
              <a href="#aboutMe" className="navLink">
                About me
              </a>
            </li>

            <li className="navText">
              <a href="#projects" className="navLink">
                Projects
              </a>
            </li>

            <li className="navText">
              <a href="#contactMe" className="navLink">
                Contact me
              </a>
            </li>
          </ul>
        </nav>

        <div className="themeSwitcher">
          <p className="themeText">Light</p>

          <div className="sliderContainer" onClick={toggleTheme}>
            <div className="slider" ref={sliderRef}></div>
          </div>

          <p className="themeText">Dark</p>
        </div>
      </header>

      <a href="#intro">
        <button className="upBtn">{upArrow}</button>
      </a>

      <main>
        <Intro
          introTextVariants={introTextVariants}
          projectsVariants={projectsVariants}
          projectContainerVariants={projectContainerVariants}
          isThemeToggled={isThemeToggled}
        ></Intro>

        <AboutMe
          introTextVariants={introTextVariants}
          projectsVariants={projectsVariants}
          projectContainerVariants={projectContainerVariants}
        ></AboutMe>

        <Projects
          introTextVariants={introTextVariants}
          projectsVariants={projectsVariants}
          projectContainerVariants={projectContainerVariants}
          isThemeToggled={isThemeToggled}
          iconGithub={iconGithub}
          linkSVG={linkSVG}
        ></Projects>

        <ContactMe
          introTextVariants={introTextVariants}
          projectsVariants={projectsVariants}
          projectContainerVariants={projectContainerVariants}
          isThemeToggled={isThemeToggled}
        ></ContactMe>
      </main>
    </div>
  );
}

export default App;
