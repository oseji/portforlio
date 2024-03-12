import { motion } from "framer-motion";

import avatar from "./assets/my picture.jpg";
import iconFramer from "./assets/framer.png";
import html from "./assets/html.svg";
import tailwind from "./assets/tailwind.svg";
import git from "./assets/git.svg";
import css from "./assets/css.svg";
import js from "./assets/js.svg";
import react from "./assets/react.svg";

const AboutMe = ({ projectsVariants }) => {
  const skillVariants = {
    hidden: { opacity: 0, scale: 0.2 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
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
            responsive user interfaces using Tailwind CSS, with ReactJS I build
            scalable and efficient UIs and I'm currently exploring Framer Motion
            for dynamic animations. I'm a problem solver and clean code
            enthusiast so let's innovate and create captivating digital
            experiences together!
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
          <h2 className="font-bold text-xl mt-8 col-span-full">My Skills:</h2>

          <motion.div
            className="skill"
            variants={skillVariants}
            initial="hidden"
            whileInView="visible"
          >
            <div className={`skillText stackLight `}>
              <img src={html} alt="html" className="skillIcon" />
              <span>HTML</span>
            </div>
          </motion.div>

          <motion.div
            className="skill"
            variants={skillVariants}
            initial="hidden"
            whileInView="visible"
          >
            <div className={`skillText stackLight `}>
              <img src={css} alt="html" className="skillIcon" />
              <span>CSS</span>
            </div>
          </motion.div>

          <motion.div
            className="skill"
            variants={skillVariants}
            initial="hidden"
            whileInView="visible"
          >
            <div className={`skillText stackLight `}>
              <img src={js} alt="html" className="skillIcon" />
              <span>Javascript</span>
            </div>
          </motion.div>

          <motion.div
            className="skill"
            variants={skillVariants}
            initial="hidden"
            whileInView="visible"
          >
            <div className={`skillText stackLight `}>
              <img src={tailwind} alt="html" className="skillIcon" />
              <span>Tailwindcss</span>
            </div>
          </motion.div>

          <motion.div
            className="skill"
            variants={skillVariants}
            initial="hidden"
            whileInView="visible"
          >
            <div className={`skillText stackLight `}>
              <img src={react} alt="html" className="skillIcon" />
              <span>ReactJS</span>
            </div>
          </motion.div>

          <motion.div
            className="skill"
            variants={skillVariants}
            initial="hidden"
            whileInView="visible"
          >
            <div className={`skillText stackLight `}>
              <img src={iconFramer} alt="html" className="skillIcon" />
              <span>Framer motion</span>
            </div>
          </motion.div>

          <motion.div
            className="skill"
            variants={skillVariants}
            initial="hidden"
            whileInView="visible"
          >
            <div className={`skillText stackLight `}>
              <img src={git} alt="html" className="skillIcon" />
              <span>Git</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
