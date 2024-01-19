import { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";

import projectData from "./data.json";
import avatar from "./assets/my picture.jpg";

function App() {
  const sliderRef = useRef(null);
  const navRef = useRef(null);

  const [isThemeToggled, setIsThemeToggled] = useState(false);

  const iconMenu = (
    <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z"
        fill="#808080"
        fillRule="evenodd"
      />
    </svg>
  );
  const [menu, setMenu] = useState(iconMenu);

  const iconGithub = (
    <svg
      className="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill={isThemeToggled ? "white" : "black"}
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const iconLinkdn = (
    <svg
      class="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill={isThemeToggled ? "white" : "black"}
      viewBox="0 0 15 15"
    >
      <path
        fillRule="evenodd"
        d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        clipRule="evenodd"
      />
      <path d="M3 5.012H0V15h3V5.012Z" />
    </svg>
  );
  const iconTwitter = (
    <svg
      class="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill={isThemeToggled ? "white" : "#000000"}
      viewBox="0 0 20 20"
    >
      <path
        fill="currentColor"
        d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"
      />
    </svg>
  );

  const iconLocation = (
    <svg
      class="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 20"
    >
      <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
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
    hidden: { scale: 0.7, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.2 },
    },
  };

  return (
    <div className={`App  ${isThemeToggled ? "appDarkMode" : "appLightMode"}`}>
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

      <a href="#intro">
        <button className="upBtn">{upArrow}</button>
      </a>

      <main>
        <section
          id="intro"
          className="flex flex-col justify-center items-center  my-40 lg:my-0"
        >
          <motion.h1
            className="introText mt-20 lg:mt-0"
            variants={introTextVariants}
            initial="hidden"
            animate="visible"
          >
            Welcome,
          </motion.h1>
          <motion.h1
            className="introText lg:mt-0"
            variants={introTextVariants}
            initial="hidden"
            animate="visible"
          >
            To my portforlio
          </motion.h1>
        </section>

        <section id="aboutMe">
          <div className="w-full lg:w-1/2">
            <motion.img
              variants={projectsVariants}
              initial="hidden"
              whileInView="visible"
              src={avatar}
              alt="avatar"
              className="avatar"
            />
          </div>

          <div className="w-full  lg:w-1/2 flex flex-col justify-between">
            <div>
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5 },
                }}
                className="sectionHeading"
              >
                ABOUT ME
              </motion.h1>

              <motion.p
                initial={{ y: 100, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5 },
                }}
                className="aboutMeText"
              >
                Hey there! I'm Ose,a front-end web developer mastering the art
                of HTML,CSS and JavaScript.With a flair for aesthetics,I've
                fine-tuned my skills in tailwindcss,crafting visually stunning
                and responsive user interfaces.
              </motion.p>

              <motion.p
                initial={{ y: 100, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5 },
                }}
                className="aboutMeText"
              >
                My playground is ReactJS,where I build scalable and efficient
                UIs.I am currently diving into the world of Framer Motion,I'm
                adding dynamic animations to my toolkit.I'm not just a coder,
                I'm a problem solver and a clean code enthusiast.
              </motion.p>

              <motion.p
                initial={{ y: 100, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5 },
                }}
                className="aboutMeText"
              >
                Join me on this journey of perpetual learning and innovation as
                I push my boundaries of web development.Let's create digital
                experiences that captivate and inspire!
              </motion.p>
            </div>

            <div>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5 },
                }}
                className="contactIconGrp"
              >
                <a href="https://github.com/oseji">{iconGithub}</a>

                <a href="https://x.com/osejiiii?s=11&t=T8eipyBsmUUoM5iFV7A9TA">
                  {iconTwitter}
                </a>

                <a href="https://www.linkedin.com/in/ose-oziegbe-648154254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                  {iconLinkdn}
                </a>
              </motion.div>

              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5 },
                }}
                className="skillsGrp"
              >
                <h2 className="font-bold text-xl mt-8 col-span-full">
                  My Skills:
                </h2>

                <div className="skill">
                  <p
                    className={`skillText ${
                      isThemeToggled ? "stackDark" : "stackLight"
                    }`}
                  >
                    HTML
                  </p>
                </div>
                <div className="skill">
                  <p
                    className={`skillText ${
                      isThemeToggled ? "stackDark" : "stackLight"
                    }`}
                  >
                    CSS
                  </p>
                </div>
                <div className="skill">
                  <p
                    className={`skillText ${
                      isThemeToggled ? "stackDark" : "stackLight"
                    }`}
                  >
                    Javascript
                  </p>
                </div>
                <div className="skill">
                  <p
                    className={`skillText ${
                      isThemeToggled ? "stackDark" : "stackLight"
                    }`}
                  >
                    Tailwindcss
                  </p>
                </div>
                <div className="skill">
                  <p
                    className={`skillText ${
                      isThemeToggled ? "stackDark" : "stackLight"
                    }`}
                  >
                    React JS
                  </p>
                </div>
                <div className="skill">
                  <p
                    className={`skillText ${
                      isThemeToggled ? "stackDark" : "stackLight"
                    }`}
                  >
                    Framer motion
                  </p>
                </div>
                <div className="skill">
                  <p
                    className={`skillText ${
                      isThemeToggled ? "stackDark" : "stackLight"
                    }`}
                  >
                    Git
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
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
              className="projectContainer"
              variants={projectContainerVariants}
              initial="hidden"
              whileInView="visible"
            >
              <img src={element.img} alt={element.alt} className="projectImg" />

              <div
                className={`projectText ${
                  isThemeToggled
                    ? "projectContainerDark"
                    : "projectContainerLight"
                }`}
              >
                <div>
                  <h1 className="projectName">{element.title}</h1>

                  <p className="aboutProject">{element.about}</p>
                </div>

                <div>
                  <div className="stackGrp">
                    {element.stack.map((stack, index) => (
                      <p
                        className={`stack ${
                          isThemeToggled ? "stackDark" : "stackLight"
                        }`}
                        key={index}
                      >
                        {stack}
                      </p>
                    ))}
                  </div>

                  <div className="iconGrp">
                    <a href={element.githubRepo}>{iconGithub}</a>

                    <a
                      href={element.href}
                      className={`font-semibold border-b text-sm hover:text-orange-400 hover:border-orange-400 ${
                        isThemeToggled ? `border-white` : `border-black`
                      }`}
                    >
                      Live site
                    </a>
                  </div>
                </div>
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
