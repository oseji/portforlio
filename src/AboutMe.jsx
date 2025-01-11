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
import scss from "./assets/scss-svgrepo-com.svg";
import js from "./assets/js.svg";
import ts from "./assets/typescript.svg";
import react from "./assets/react.svg";
import gsapIcon from "./assets/greensock-svgrepo-com.svg";
import firebaseIcon from "./assets/icons8-firebase.svg";
import reduxIcon from "./assets/icons8-redux.svg";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const avatarRef = useRef(null);
  const textRef = useRef(null);
  const headingRef = useRef(null);
  const lineRef = useRef(null);
  const skillTextRefs = useRef([]);
  const skillImageRefs = useRef([]);

  const endValue = window.innerWidth <= 500 ? "top 10%" : "top 20%";
  const lineWidth = window.innerWidth <= 500 ? "200px" : "250px";

  const skills = [
    { name: "HTML", img: html },
    { name: "CSS", img: css },
    { name: "SCSS", img: scss },
    { name: "Javascript", img: js },
    { name: "Typescript", img: ts },
    { name: "Tailwindcss", img: tailwind },
    { name: "React", img: react },
    { name: "Redux toolkit", img: reduxIcon },
    { name: "Framer motion", img: framer },
    { name: "GSAP", img: gsapIcon },
    { name: "Firebase", img: firebaseIcon },
    { name: "Git", img: git },
  ];

  useEffect(() => {
    // animating avatar
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

    // animating skill texts
    if (skillTextRefs.current && skillTextRefs.current.length > 0) {
      skillTextRefs.current.forEach((ref) => {
        if (ref) {
          gsap.fromTo(
            ref,
            { y: 60 },
            {
              y: 0,
              transformOrigin: "center",
              scrollTrigger: {
                trigger: ref,
                start: "top bottom",
                end: "top 60%",
                scrub: 1.5,
              },
            }
          );
        }
      });
    }

    // animating skill icons
    if (skillImageRefs.current && skillImageRefs.current.length > 0) {
      skillImageRefs.current.forEach((ref) => {
        if (ref) {
          gsap.fromTo(
            ref,
            { y: -60 },
            {
              y: 0,
              transformOrigin: "center",
              scrollTrigger: {
                trigger: ref,
                start: "top bottom",
                end: "top 60%",
                scrub: 1.5,
              },
            }
          );
        }
      });
    }

    // heading animation
    if (headingRef.current) {
      const text = new SplitType(headingRef.current, { types: "chars,words" });

      const tl = gsap.timeline();

      tl.fromTo(
        text.chars,
        { y: 40 },
        {
          y: 0,
          stagger: 1,
          duration: 1,

          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 3,
          },
        }
      );
    }

    // animating line
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

  return (
    <section id="aboutMe">
      <div className="w-full lg:w-1/2">
        <img src={avatar} alt="avatar" className="avatar" ref={avatarRef} />
      </div>

      <div className="w-full  lg:w-1/2 flex flex-col justify-between">
        <div>
          <h1 className="sectionHeading" ref={headingRef}>
            <span className="headingNum">01. </span>
            ABOUT ME
          </h1>

          <div className="line" ref={lineRef}></div>

          <p className="aboutMeText" ref={textRef}>
            <strong> Hey I’m Ose, your go to frontend developer!</strong>
            <br />
            <br />
            I build stunning, responsive, and user-friendly web experiences
            using HTML, CSS, and JavaScript. With ReactJS and TailwindCSS in my
            toolkit, I craft UIs that are not just sleek but also scalable and
            efficient.
            <br />
            <br />
            Lately, I’ve been diving deep into GSAP, bringing websites to life
            with animations that make every interaction pop. I’m all about clean
            code, creative problem-solving, and turning ideas into digital
            experiences that actually stick with users.
            <br />
            <br />
            When I’m not coding, I’m probably exploring new ways to push the
            boundaries of web design. Wanna see what I’m all about? Check out my
            projects, and let’s team up to create something that truly stands
            out.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-xl mt-8 mb-4 col-span-full">
            My Skills:
          </h2>
          <div className="skillsGrp">
            {skills.map((element, index) => (
              <div className="skill" key={index}>
                <div className={`skillText`}>
                  <img
                    src={element.img}
                    alt={element.name}
                    className="skillIcon"
                    ref={(el) => (skillImageRefs.current[index] = el)}
                  />
                  <span ref={(el) => (skillTextRefs.current[index] = el)}>
                    {element.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
