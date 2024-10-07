import { useRef, useEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const textRefs = [useRef(null), useRef(null), useRef(null)];

  // typewriter effect
  useEffect(() => {
    const text1 = new SplitType(textRefs[0].current, {
      types: "chars, words",
    });
    const text2 = new SplitType(textRefs[1].current, {
      types: "chars, words",
    });
    const text3 = new SplitType(textRefs[2].current, {
      types: "chars, words",
    });

    const tl = gsap.timeline();

    gsap.set([text1.chars, text2.chars, text3.chars], { opacity: 0 });

    tl.fromTo(
      text1.chars,
      {
        opacity: 0,
        y: -50,
        scale: 0.1,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.07,
      }
    )
      .fromTo(
        text2.chars,
        {
          opacity: 0,
          y: -50,
          scale: 0.1,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.07,
        }
      )
      .fromTo(
        text3.chars,
        {
          opacity: 0,
          y: -50,
          scale: 0.1,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.07,
        }
      );
  }, []);

  return (
    <section
      id="intro"
      className="flex flex-col justify-center lg:items-start min-h-[90dvh] md:min-h-screen"
    >
      <div className=" min-h-80 flex flex-col justify-between items-center mx-auto">
        <div className="introText" ref={textRefs[0]}>
          Hey there
        </div>

        <div className="introText" ref={textRefs[1]}>
          I'm Ose, a front-end developer
        </div>

        <div className="introText" ref={textRefs[2]}>
          Welcome to my portfolio
        </div>
      </div>
    </section>
  );
};

export default Intro;
