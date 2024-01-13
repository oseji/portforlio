import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import countryFinder from "./assets/country finder.jpg";
import dictionary from "./assets/dictionary.jpg";
import githubSearch from "./assets/github search.jpg";
import ipAddress from "./assets/ip address.jpg";
import taxas from "./assets/taxas.jpg";
import translator from "./assets/translator.jpg";

function App() {
  const iconMenu = (
    <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z"
        fill="#FFF"
        fillRule="evenodd"
      />
    </svg>
  );

  const iconClose = (
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z"
        fill="#000"
        fillRule="evenodd"
        opacity=".201"
      />
    </svg>
  );

  const sliderRef = useRef(null);

  const [menu, setMenu] = useState(iconMenu);
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [isThemeToggled, setIsThemeToggled] = useState(false);

  const toggleMenu = () => {
    setIsMenuToggled(!isMenuToggled);

    isMenuToggled ? setMenu(iconClose) : setMenu(iconMenu);
  };

  const toggleTheme = () => {
    setIsThemeToggled(!isThemeToggled);
    const slider = sliderRef.current;

    slider.classList.toggle("translate-x-end");
  };

  const projectsVariants = {
    hidden: { scale: 0.7, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  const projectContainerVariants = {
    // hidden: { y: 100, opacity: 0 },
    // visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } },

    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.5 },
    },
  };

  return (
    <div className={`App ${isThemeToggled ? "appDarkMode" : "appLightMode"}`}>
      <header
        className={` ${isThemeToggled ? "headerDarkMode" : "headerLightMode"}`}
      >
        <div className="logoGrp">
          <h1 className="logo">Oseji</h1>
          <div className="menuIcon" onClick={toggleMenu}>
            {menu}
          </div>
        </div>

        <nav>
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

      <main>
        <section id="intro">
          <motion.h1 className="introText mt-20 ">Hey,I'm Ose</motion.h1>
          <motion.h1 className="introText">A Frontend developer</motion.h1>
        </section>

        <section id="aboutMe">
          <h1 className="sectionHeading">ABOUT ME</h1>

          <p className="aboutMeText">
            I am a Front-end developer with a keen eye for design details,always
            striving to improve.I'm adept with the use of,
            Tailwindcss,Javascript and ReactJS
          </p>
        </section>

        <motion.section
          variants={projectsVariants}
          initial="hidden"
          whileInView="visible"
          id="projects"
          className={
            isThemeToggled ? "projectsPageDarkMode" : "projectsPageLightMode"
          }
        >
          <h1 className="sectionHeading col-span-full">PROJECTS</h1>

          <motion.div
            className="projectContainer"
            variants={projectContainerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <img
              src={countryFinder}
              alt="Country Finder Image"
              className="projectImg"
            />

            <div className="projectText">
              <a
                href="https://country-finder-oseji.netlify.app/"
                className="projectName"
              >
                Country Finder
              </a>

              <p className="aboutProject">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Facilis aliquam corrupti corporis nulla aspernatur soluta
                consectetur similique laudantium perferendis rerum.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="projectContainer"
            variants={projectContainerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <img
              src={dictionary}
              alt="Dictionary Image"
              className="projectImg"
            />

            <div className="projectText">
              <a
                href="https://osejis-dictionary.netlify.app/"
                className="projectName"
              >
                Dictionary
              </a>

              <p className="aboutProject">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Facilis aliquam corrupti corporis nulla aspernatur soluta
                consectetur similique laudantium perferendis rerum.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="projectContainer"
            variants={projectContainerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <img
              src={githubSearch}
              alt="Github Search Image"
              className="projectImg"
            />

            <div className="projectText">
              <a
                href="https://github-profile-finder-oseji.netlify.app/"
                className="projectName"
              >
                Github Profile Searcher
              </a>

              <p className="aboutProject">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Facilis aliquam corrupti corporis nulla aspernatur soluta
                consectetur similique laudantium perferendis rerum.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="projectContainer"
            variants={projectContainerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <img
              src={ipAddress}
              alt="IP Address Image"
              className="projectImg"
            />

            <div className="projectText">
              <a
                href="https://ip-tracker-oseji.netlify.app/"
                className="projectName"
              >
                IP Address Tracker
              </a>

              <p className="aboutProject">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Facilis aliquam corrupti corporis nulla aspernatur soluta
                consectetur similique laudantium perferendis rerum.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="projectContainer"
            variants={projectContainerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <img
              src={taxas}
              alt="Taxas Landing Page Image"
              className="projectImg"
            />

            <div className="projectText">
              <a href="https://txs-oseji.netlify.app/" className="projectName">
                Taxas Landing Page
              </a>

              <p className="aboutProject">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Facilis aliquam corrupti corporis nulla aspernatur soluta
                consectetur similique laudantium perferendis rerum.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="projectContainer"
            variants={projectContainerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <img
              src={translator}
              alt="Language Translator Image"
              className="projectImg"
            />

            <div className="projectText">
              <a
                href="https://translator-oseji.netlify.app/"
                className="projectName"
              >
                Language Translator
              </a>

              <p className="aboutProject">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Facilis aliquam corrupti corporis nulla aspernatur soluta
                consectetur similique laudantium perferendis rerum.
              </p>
            </div>
          </motion.div>
        </motion.section>

        <section id="contactMe">
          <h1 className="sectionHeading">CONTACT ME</h1>
        </section>
      </main>
    </div>
  );
}

export default App;
