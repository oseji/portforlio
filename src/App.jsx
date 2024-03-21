import { useState, useEffect, useRef } from "react";

import Intro from "./Intro";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ContactMe from "./ContactMe";

import iconMenu from "./assets/iconMenu.svg";
import iconClose from "./assets/iconClose.svg";

function App() {
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

  const moon = (
    <svg
      class={`w-4 h-4 transition ease-in-out duration-200 ${
        isThemeToggled ? "text-orange-400 scale-125" : "text-black"
      }`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const sun = (
    <svg
      class={`w-5 h-5 transition ease-in-out duration-200 ${
        !isThemeToggled ? "text-orange-400 scale-125" : "text-white"
      }`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z"
        clipRule="evenodd"
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
          <div className="themeIcon">{sun}</div>

          <div className="sliderContainer" onClick={toggleTheme}>
            <div className="slider" ref={sliderRef}></div>
          </div>
          <div className="themeIcon">{moon}</div>
        </div>
      </header>

      <a href="#intro">
        <button className="upBtn">{upArrow}</button>
      </a>

      <main>
        <Intro isThemeToggled={isThemeToggled}></Intro>

        <AboutMe projectsVariants={projectsVariants}></AboutMe>

        <Projects
          projectsVariants={projectsVariants}
          projectContainerVariants={projectContainerVariants}
          isThemeToggled={isThemeToggled}
        ></Projects>

        <ContactMe isThemeToggled={isThemeToggled}></ContactMe>
      </main>
    </div>
  );
}

export default App;
