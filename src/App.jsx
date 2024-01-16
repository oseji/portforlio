import { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";

import projectData from "./data.json";

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

  const iconGithub = (
    <svg
      class="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fill-rule="evenodd"
        d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
        clip-rule="evenodd"
      />
    </svg>
  );

  const iconPhone = (
    <svg
      class="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 19 18"
    >
      <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
    </svg>
  );

  const sliderRef = useRef(null);
  const navRef = useRef(null);

  const [menu, setMenu] = useState(iconMenu);
  const [isThemeToggled, setIsThemeToggled] = useState(false);

  const toggleMenu = () => {
    const navbar = navRef.current;
    navbar.classList.toggle("hideNav");
  };

  const toggleTheme = () => {
    setIsThemeToggled(!isThemeToggled);

    const slider = sliderRef.current;
    slider.classList.toggle("translate-x-end");
  };

  const introTextVariants = {
    hidden: { y: 300 },
    visible: { y: 0, transition: { duration: 0.5 } },
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

  const ulVariants = {
    hidden: { y: 200, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
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

      <main>
        <section
          id="intro"
          className="flex flex-col justify-center my-40 lg:my-0"
        >
          <motion.h1
            className="introText mt-32 lg:mt-20"
            variants={introTextVariants}
            initial="hidden"
            animate="visible"
          >
            Hey,I'm Ose
          </motion.h1>
          <motion.h1
            className="introText"
            variants={introTextVariants}
            initial="hidden"
            animate="visible"
          >
            A Frontend developer
          </motion.h1>
        </section>

        <section id="aboutMe">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
            className="sectionHeading"
          >
            ABOUT ME
          </motion.h1>

          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
            className="aboutMeText"
          >
            Hey there,I am a web developer that is seasoned in developing
            landing pages and small scale websites for small to medium sized
            businesses.I am also open to working with larger business if
            opportunity presents itself
          </motion.p>

          <motion.ul variants={ulVariants} initial="hidden" whileInView="show">
            <li>
              • Proficient with the use of HTML,CSS,JavaScript react.js and
              tailwindcss for handling more complex projects.
            </li>

            <li>
              • My services cover full management of your project from the start
              until completion.
            </li>

            <li>
              • Communication and transparency is of upmost importance to me so
              feel free to reach out whenever you feel the need to.
            </li>

            <li>
              • Nothing makes me happier than a satisfied customer and I eagerly
              look forward to helping businesses grow with the use of my skills
            </li>
          </motion.ul>
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
          {projectData.map((element, index) => (
            <motion.div
              key={index}
              className={`projectContainer ${
                isThemeToggled
                  ? "projectContainerDark"
                  : "projectContainerLight"
              }`}
              variants={projectContainerVariants}
              initial="hidden"
              whileInView="visible"
            >
              <img src={element.img} alt={element.alt} className="projectImg" />

              <div className="projectText">
                <a href={element.href} className="projectName">
                  {element.title}
                </a>

                <p className="aboutProject">{element.about}</p>
              </div>
            </motion.div>
          ))}
        </motion.section>

        <section id="contactMe">
          <h1 className="sectionHeading">CONTACT ME</h1>
        </section>
      </main>
    </div>
  );
}

export default App;
