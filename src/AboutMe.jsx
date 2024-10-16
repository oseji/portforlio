import { useRef, useEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import avatar from "./assets/my picture.jpg";
import framer from "./assets/framer-logo-svgrepo-com.png";
import html from "./assets/html.svg";
import tailwind from "./assets/tailwind.svg";
import git from "./assets/git.svg";
import css from "./assets/css.svg";
import js from "./assets/js.svg";
import ts from "./assets/typescript.svg";
import react from "./assets/react.svg";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const avatarRef = useRef(null);
  const textRef = useRef(null);
  const lineRef = useRef(null);
  const endValue = window.innerWidth <= 500 ? "top 10%" : "top 20%";
  const lineWidth = window.innerWidth <= 500 ? "200px" : "250px";

  // animating avatar
  useEffect(() => {
    if (avatarRef.current) {
      gsap.fromTo(
        avatarRef.current,
        { scale: 0.3 },
        {
          scale: 1,
          transformOrigin: "center",
          scrollTrigger: {
            trigger: avatarRef.current,
            start: "top bottom",
            end: "top 30%",
            scrub: 1.5,
          },
        }
      );
    }
  }, []);

  // animating about me text
  useEffect(() => {
    const text = new SplitType(textRef.current, {
      types: "chars, words",
    });

    const tl = gsap.timeline();

    tl.fromTo(
      text.chars,
      {
        opacity: 0,
        y: -20,
        scale: 1.5,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.5,
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          scrub: 1,
          start: "top bottom",
          end: endValue,
        },
      }
    );
  }, []);

  // animating line
  useEffect(() => {
    gsap.set(lineRef.current, { width: 0 });

    gsap.fromTo(
      lineRef.current,
      { width: 0 },
      {
        width: lineWidth,
        duration: 3,
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 90%",
          end: "top 20%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section id="aboutMe">
      <div className="w-full lg:w-1/2">
        <img src={avatar} alt="avatar" className="avatar" ref={avatarRef} />
      </div>

      <div className="w-full  lg:w-1/2 flex flex-col justify-between">
        <div>
          <h1 className="sectionHeading">
            <span className="headingNum">01. </span>
            ABOUT ME
          </h1>

          <div className="line" ref={lineRef}></div>

          <p className="aboutMeText" ref={textRef}>
            Hi, I'm Ose, a <b>front-end web developer</b> with a strong
            foundation in HTML, CSS and JavaScript. I specialize in implementing
            beautiful and responsive user interfaces using the power of
            TailwindCSS to accelerate my design process. With ReactJS, I build
            scalable and efficient UIs, ensuring every project is both solid and
            adaptable.
            <br />
            <br />
            Currently, I'm exploring GreenSock Animation Platform (GSAP) to add
            lively animations that make interactions more engaging and fun,
            adding an extra layer of engagement to my work. I thrive on tackling
            complex problems and believe strongly in writing clean, maintainable
            code. My goal is to innovate and create captivating digital
            experiences that leave a lasting impression on users.
            <br />
            <br />
            Don’t just take my word for it though, check out my projects to see
            my work in action. Let's connect and collaborate to turn your vision
            into reality! Together, we can create something truly special.
          </p>
        </div>

        <div className="skillsGrp">
          <h2 className="font-bold text-xl mt-8 col-span-full">My Skills:</h2>

          <div className="skill">
            <div className={`skillText`}>
              <img src={html} alt="html" className="skillIcon" />
              <span>HTML</span>
            </div>
          </div>

          <div className="skill">
            <div className={`skillText`}>
              <img src={css} alt="css" className="skillIcon" />
              <span>CSS</span>
            </div>
          </div>

          <div className="skill">
            <div className={`skillText`}>
              <img src={js} alt="javascript" className="skillIcon" />
              <span>Javascript</span>
            </div>
          </div>

          <div className="skill">
            <div className={`skillText`}>
              <img src={ts} alt="typescript" className="skillIcon" />
              <span>Typescript</span>
            </div>
          </div>

          <div className="skill">
            <div className={`skillText`}>
              <img src={tailwind} alt="tailwindcss" className="skillIcon" />
              <span>Tailwindcss</span>
            </div>
          </div>

          <div className="skill">
            <div className={`skillText`}>
              <img src={react} alt="react" className="skillIcon" />
              <span>ReactJS</span>
            </div>
          </div>

          <div className="skill">
            <div className={`skillText`}>
              <img src={framer} alt="framer motion" className="skillIcon" />
              <span>Framer motion</span>
            </div>
          </div>

          <div className="skill">
            <div className={`skillText`}>
              <img src={git} alt="html" className="skillIcon" />
              <span>Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
