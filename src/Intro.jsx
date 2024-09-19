import { TypeAnimation } from "react-type-animation";

const Intro = () => {
  return (
    <section
      id="intro"
      className="flex flex-col justify-center  lg:items-start min-h-screen"
    >
      <div className=" min-h-80">
        <TypeAnimation
          sequence={["Hey there", 1000]}
          cursor={false}
          className="introText"
          wrapper="h1"
          speed={30}
          repeat={0}
        />

        <TypeAnimation
          sequence={[
            "",
            1000,
            "I'm Ose",
            1000,
            "I'm Ose, a Front-end developer",
            1000,
          ]}
          cursor={false}
          className="introText"
          wrapper="h1"
          speed={30}
          repeat={0}
        />

        <TypeAnimation
          sequence={["", 5000, "Welcome to my portfolio", 1000]}
          cursor={false}
          className="introText"
          wrapper="h1"
          speed={30}
          repeat={0}
        />
      </div>
    </section>
  );
};

export default Intro;
