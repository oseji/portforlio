import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/all";
import projectData from "./data.json";
import prevBtn from "./assets/prev.svg";
import nextBtn from "./assets/next.svg";

gsap.registerPlugin(ScrollTrigger);

const Projects = ({ darkMode }) => {
  const headingRef = useRef(null);
  const lineRef = useRef(null);
  const projectHeadingRef = useRef([]);
  const projectTextRef = useRef([]);

  const [currentPage, setCurrentPage] = useState(1);
  const numberOfItemsPerPage = 3;
  const numberOfPages = Math.ceil(projectData.length / numberOfItemsPerPage);

  const startIndex = (currentPage - 1) * numberOfItemsPerPage;
  const endIndex = startIndex + numberOfItemsPerPage;

  const lineWidth = window.innerWidth <= 500 ? "200px" : "250px";

  const handlePrevBtn = () => {
    if (currentPage >= 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextBtn = () => {
    if (currentPage < numberOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const iconGithub = (
    <svg
      className="w-6 h-6 "
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill={darkMode ? "black" : "white"}
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const linkSVG = (
    <svg
      stroke="currentColor"
      fill={darkMode ? "white" : "#000000"}
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

  useEffect(() => {
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

    // heading animation
    if (headingRef.current) {
      const text = new SplitType(headingRef.current, { types: "chars,words" });

      const tl = gsap.timeline();

      tl.fromTo(
        text.chars,
        { scale: 0.2, opacity: 0, y: -20 },
        {
          scale: 1,
          opacity: 1,
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

    // animating project heading
    if (projectHeadingRef.current && projectHeadingRef.current.length > 0) {
      projectHeadingRef.current.forEach((ref) => {
        if (ref) {
          gsap.fromTo(
            ref,
            { y: -50 },
            {
              y: 0,
              transformOrigin: "center",
              scrollTrigger: {
                trigger: ref,
                start: "top bottom",
                end: "top 40%",
                scrub: 1.5,
              },
            }
          );
        }
      });
    }

    // animating project text
    if (projectTextRef.current && projectTextRef.current.length > 0) {
      projectTextRef.current.forEach((ref) => {
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
                end: "top 70%",
                scrub: 1.5,
              },
            }
          );
        }
      });
    }
  }, []);

  return (
    <div id="projects" className=" bg-lightBg dark:bg-black ">
      <h1 className="sectionHeading col-span-full" ref={headingRef}>
        <span className="headingNum">02. </span>PROJECTS
      </h1>

      <div className="line" ref={lineRef}></div>

      {/* tablets and above */}
      <div className=" hidden lg:block">
        <div className="displayProjectsBig">
          {/* prev btn */}
          <button
            className={`prevNextBtn ${
              darkMode ? "projectContainerDark" : "projectContainerLight"
            }  ${currentPage === 1 ? "hidden" : ""}`}
            id="prevBtn"
            onClick={handlePrevBtn}
            disabled={currentPage === 1}
          >
            <img src={prevBtn} alt="previous btn" />
          </button>

          {/* projects */}
          {projectData.slice(startIndex, endIndex).map((element, index) => (
            <div key={index} className="projectContainer">
              <img src={element.img} alt={element.alt} className="projectImg" />

              <div className={`projectText`}>
                <div className=" overflow-hidden">
                  <h1
                    className="projectName"
                    ref={(el) => (projectHeadingRef.current[index] = el)}
                  >
                    {element.title}
                  </h1>

                  <p
                    className="aboutProject"
                    ref={(el) => (projectTextRef.current[index] = el)}
                  >
                    {element.about}
                  </p>
                </div>

                <div>
                  <div className="stackGrp">
                    {element.stack.map((stack, index) => (
                      <p className={`stack`} key={index}>
                        {stack}
                      </p>
                    ))}
                  </div>

                  <div className="iconGrp">
                    <a
                      href={element.githubRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {iconGithub}
                    </a>

                    <div className=" flex flex-row items-center gap-2 hover:text-orange-400 duration-100">
                      <a
                        href={element.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-semibold  text-sm`}
                      >
                        Live site
                      </a>

                      {linkSVG}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* next btn */}
          <button
            className={`prevNextBtn ${
              darkMode ? "projectContainerDark" : "projectContainerLight"
            } ${currentPage === numberOfPages ? "hidden" : ""}`}
            id="nextBtn"
            onClick={handleNextBtn}
            disabled={currentPage === numberOfPages}
          >
            <img src={nextBtn} alt="next button" />
          </button>
        </div>

        {/* pagination section */}
        <div>
          <div className="pageNumGrp">
            {Array.from({ length: numberOfPages }, (_, index) => (
              <div
                className={`pageNum ${
                  currentPage === index + 1
                    ? "scale-110 font-bold bg-orange-400"
                    : ""
                }`}
                key={index}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* mobiles */}
      <div className="displayProjectsMobile">
        {projectData.map((element, index) => (
          <div key={index} className="projectContainer">
            <img src={element.img} alt={element.alt} className="projectImg" />

            <div className={`projectText`}>
              <div>
                <h1 className="projectName">{element.title}</h1>

                <p className="aboutProject">{element.about}</p>
              </div>

              <div>
                <div className="stackGrp">
                  {element.stack.map((stack, index) => (
                    <p className={`stack`} key={index}>
                      {stack}
                    </p>
                  ))}
                </div>

                <div className="iconGrp">
                  <a
                    href={element.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {iconGithub}
                  </a>

                  <div className=" flex flex-row items-center gap-2 hover:text-orange-400 duration-100">
                    <a
                      href={element.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`font-semibold  text-sm`}
                    >
                      Live site
                    </a>

                    {linkSVG}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
