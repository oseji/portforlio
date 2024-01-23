import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import copy from "clipboard-copy";

import projectData from "./data.json";

import avatar from "./assets/my picture.jpg";
import iconHtml from "./assets/html.png";
import iconCSS from "./assets/css.png";
import iconJS from "./assets/java-script.png";
import iconGit from "./assets/git.png";
import iconReact from "./assets/react.png";
import iconTailwind from "./assets/tailwind-css-icon.png";
import iconFramer from "./assets/framer.png";

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
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const words = ["", " , a frontend dev"];

  const iconMenu = (
    <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z"
        fill="#808080"
        fillRule="evenodd"
      />
    </svg>
  );
  const iconClose = (
    <svg width="20" height="16" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z"
        fill="#808080"
        fill-rule="evenodd"
      />
    </svg>
  );
  const iconGithub = (
    <svg
      className="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
        clipRule="evenodd"
      />
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
  const copySVG = (
    <svg
      stroke="currentColor"
      fill={isThemeToggled ? "white" : "#000000"}
      strokeWidth="0"
      viewBox="0 0 448 512"
      className="cursor-pointer hover:scale-110 duration-200 ml-3 "
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"></path>
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

  const [menu, setMenu] = useState(iconMenu);
  const [isMenuToggled, setIsMenuToggled] = useState(false);

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const currentWord = words[currentIndex];
    const currentText = currentWord.slice(0, text.length + 1);

    setText(currentText);
  }, [currentIndex, text]);

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
          className="flex flex-col justify-start lg:justify-center items-center "
        >
          <motion.h1
            className="introText mt-20 lg:mt-0 text-2xl md:text-3xl"
            variants={introTextVariants}
            initial="hidden"
            animate="visible"
          >
            Hey there,I'm
          </motion.h1>

          <motion.h1
            className="introText lg:mt-0 text-orange-400 text-5xl lg:text-6xl"
            variants={introTextVariants}
            initial="hidden"
            animate="visible"
          >
            Ose
            <span
              className={`text-2xl md:text-3xl ${
                isThemeToggled ? "text-white" : "text-black"
              }`}
            >
              {text}
            </span>
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
                <span className="headingNum">01. </span>
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
                Hey I'm Ose, a front-end web developer skilled in HTML, CSS and
                JavaScript. I specialize in crafting visually stunning and
                responsive user interfaces using Tailwind CSS, with ReactJS I
                build scalable and efficient UIs and I'm currently exploring
                Framer Motion for dynamic animations. I'm a problem solver and
                clean code enthusiast so let's innovate and create captivating
                digital experiences together!
              </motion.p>
            </div>

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
                <div
                  className={`skillText  ${
                    isThemeToggled ? "stackDark" : "stackLight"
                  } `}
                >
                  <img src={iconHtml} alt="html" className="skillIcon" />
                  <span>HTML</span>
                </div>
              </div>

              <div className="skill">
                <div
                  className={`skillText  ${
                    isThemeToggled ? "stackDark" : "stackLight"
                  }`}
                >
                  <img src={iconCSS} alt="html" className="skillIcon" />
                  <span>CSS</span>
                </div>
              </div>

              <div className="skill">
                <div
                  className={`skillText  ${
                    isThemeToggled ? "stackDark" : "stackLight"
                  }`}
                >
                  <img src={iconJS} alt="html" className="skillIcon" />
                  <span>Javascript</span>
                </div>
              </div>

              <div className="skill">
                <div
                  className={`skillText  ${
                    isThemeToggled ? "stackDark" : "stackLight"
                  }`}
                >
                  <img src={iconTailwind} alt="html" className="skillIcon" />
                  <span>Tailwindcss</span>
                </div>
              </div>

              <div className="skill">
                <div
                  className={`skillText  ${
                    isThemeToggled ? "stackDark" : "stackLight"
                  }`}
                >
                  <img src={iconReact} alt="html" className="skillIcon" />
                  <span>ReactJS</span>
                </div>
              </div>

              <div className="skill">
                <div
                  className={`skillText  ${
                    isThemeToggled ? "stackDark" : "stackLight"
                  }`}
                >
                  <img src={iconFramer} alt="html" className="skillIcon" />
                  <span>Framer motion</span>
                </div>
              </div>

              <div className="skill">
                <div
                  className={`skillText  ${
                    isThemeToggled ? "stackDark" : "stackLight"
                  }`}
                >
                  <img src={iconGit} alt="html" className="skillIcon" />
                  <span>Git</span>
                </div>
              </div>
            </motion.div>
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
          <h1 className="sectionHeading col-span-full">
            <span className="headingNum">02. </span>PROJECTS
          </h1>
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
                    <a href={element.githubRepo} target="_blank">
                      {iconGithub}
                    </a>

                    <div className=" flex flex-row items-center gap-2 hover:text-orange-400 duration-100">
                      <a
                        href={element.href}
                        target="_blank"
                        className={`font-semibold  text-sm  ${
                          isThemeToggled ? `border-white` : `border-black`
                        }`}
                      >
                        Live site
                      </a>

                      {linkSVG}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.section>

        <section id="contactMe">
          <motion.h1
            className="sectionHeading"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.5 },
            }}
          >
            <span className="headingNum">03. </span>WHATS NEXT ?
          </motion.h1>

          <div>
            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.5 },
              }}
              className="text-center text-2xl mt-10"
            >
              Contact me
            </motion.h2>

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
            </motion.div>

            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.5 },
              }}
              className="text-center mt-10"
            >
              Are you interested in working together? We should schedule a time
              to chat.
            </motion.p>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.5 },
              }}
              className="flex flex-row items-center gap-5 justify-center mt-5 mb-5"
            >
              <p>jiade1233@gmail.com</p>

              <button
                onClick={() => {
                  copy("jiade1233@gmail.com")
                    .then(alert("copied email"))
                    .catch((err) => console.log(err));
                }}
              >
                {copySVG}
              </button>
            </motion.div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.5 },
              }}
              className="flex flex-row items-center gap-5 justify-center mb-10"
            >
              <p>+234 70 1995 2903</p>

              <button
                onClick={() => {
                  copy("+234 70 1995 2903")
                    .then(alert("copied email"))
                    .catch((err) => console.log(err));
                }}
              >
                {copySVG}
              </button>
            </motion.div>

            <motion.a
              initial={{ y: 100, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.5 },
              }}
              href="mailto:jiade1233@gmail.com"
              className={`emailBtn ${
                isThemeToggled ? "text-white" : "text-black"
              }`}
            >
              Send me an email
            </motion.a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
