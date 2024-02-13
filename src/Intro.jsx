import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Intro = ({ introTextVariants, isThemeToggled }) => {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const words = ["", " , a frontend dev"];

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
    <section id="intro" className="flex flex-col justify-center items-center ">
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
  );
};

export default Intro;
