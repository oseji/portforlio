import { TypeAnimation } from "react-type-animation";

const Intro = ({ isThemeToggled }) => {
  return (
    <section
      id="intro"
      className="flex flex-col justify-center items-center min-h-screen"
    >
      <TypeAnimation
        sequence={[
          "Hey there",
          1000,
          "Hey there I'm Ose",
          1000,
          "Hey there I'm Ose, a Front-end developer",
          1000,
          "Hey there I'm Ose, a Front-end developer, welcome to my portfolio.",
          1000,
        ]}
        className="introText"
        wrapper="h1"
        speed={30}
        repeat={0}
      />
    </section>
  );
};

export default Intro;
