import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import projectData from "./data.json";

const Projects = ({
  projectsVariants,
  projectContainerVariants,
  isThemeToggled,
  iconGithub,
  linkSVG,
}) => {
  const [areProjectsFiltered, setAreProjectsFiltered] = useState(true);
  const filteredProjects = projectData.slice(0, 3);
  const [dataToMap, setDataToMap] = useState(filteredProjects);

  //toggling between showing all projects and showing just first 3
  useEffect(() => {
    areProjectsFiltered
      ? setDataToMap(filteredProjects)
      : setDataToMap(projectData);
  }, [areProjectsFiltered]);

  return (
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
      <div className="displayProjects">
        {dataToMap.map((element, index) => (
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
      </div>

      <button
        className="block mx-auto font-semibold mt-5 hover:underline"
        onClick={() => setAreProjectsFiltered(!areProjectsFiltered)}
      >
        {areProjectsFiltered ? "Show All" : "Show less"}
      </button>
    </motion.section>
  );
};

export default Projects;
