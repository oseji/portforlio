import { motion } from "framer-motion";

import avatar from "./assets/my picture.jpg";
import framer from "./assets/framer-logo-svgrepo-com.png";
import html from "./assets/html.svg";
import tailwind from "./assets/tailwind.svg";
import git from "./assets/git.svg";
import css from "./assets/css.svg";
import js from "./assets/js.svg";
import ts from "./assets/typescript.svg";
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
            initial={{ x: 100, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.5 },
            }}
            className="sectionHeading"
          >
            <span className="headingNum">01. </span>
            ABOUT ME
          </motion.h1>

          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { delay: 0.7, duration: 0.5 },
            }}
            className="aboutMeText"
          >
            Hi, I'm Ose, a <b>front-end web developer</b> with a strong
            foundation in HTML, CSS and JavaScript. I specialize in implementing
            beautiful and responsive user interfaces using the power of
            TailwindCSS to accelerate my design process. With ReactJS, I build
            scalable and efficient UIs, ensuring every project is both solid and
            adaptable.
            <br />
            <br />
            Currently, I'm exploring Framer Motion to add lively animations that
            make interactions more engaging and fun, adding an extra layer of
            engagement to my work. I thrive on tackling complex problems and
            believe strongly in writing clean, maintainable code. My goal is to
            innovate and create captivating digital experiences that leave a
            lasting impression on users.
            <br />
            <br />
            Don’t just take my word for it though, check out my projects to see
            my work in action. Let's connect and collaborate to turn your vision
            into reality! Together, we can create something truly special.
          </motion.p>
        </div>

        <motion.div className="skillsGrp">
          <motion.h2
            className="font-bold text-xl mt-8 col-span-full"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.5 },
            }}
          >
            My Skills:
          </motion.h2>

          <motion.div
            className="skill"
            variants={skillVariants}
            initial="hidden"
            whileInView="visible"
          >
            <div className={`skillText`}>
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
            <div className={`skillText`}>
              <img src={css} alt="css" className="skillIcon" />
              <span>CSS</span>
            </div>
          </motion.div>

          <motion.div
            className="skill"
            variants={skillVariants}
            initial="hidden"
            whileInView="visible"
          >
            <div className={`skillText`}>
              <img src={js} alt="javascript" className="skillIcon" />
              <span>Javascript</span>
            </div>
          </motion.div>

          <motion.div
            className="skill"
            variants={skillVariants}
            initial="hidden"
            whileInView="visible"
          >
            <div className={`skillText`}>
              <img src={ts} alt="typescript" className="skillIcon" />
              <span>Typescript</span>
            </div>
          </motion.div>

          <motion.div
            className="skill"
            variants={skillVariants}
            initial="hidden"
            whileInView="visible"
          >
            <div className={`skillText`}>
              <img src={tailwind} alt="tailwindcss" className="skillIcon" />
              <span>Tailwindcss</span>
            </div>
          </motion.div>

          <motion.div
            className="skill"
            variants={skillVariants}
            initial="hidden"
            whileInView="visible"
          >
            <div className={`skillText`}>
              <img src={react} alt="react" className="skillIcon" />
              <span>ReactJS</span>
            </div>
          </motion.div>

          <motion.div
            className="skill"
            variants={skillVariants}
            initial="hidden"
            whileInView="visible"
          >
            <div className={`skillText`}>
              <img src={framer} alt="framer motion" className="skillIcon" />
              <span>Framer motion</span>
            </div>
          </motion.div>

          <motion.div
            className="skill"
            variants={skillVariants}
            initial="hidden"
            whileInView="visible"
          >
            <div className={`skillText`}>
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
