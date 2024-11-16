import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import { CircularProgress } from "@mui/material";

gsap.registerPlugin(ScrollTrigger);

const ContactMe = () => {
  const headingRef = useRef(null);
  const lineRef = useRef(null);
  const inputFormRefs = useRef([]);
  const lineWidth = window.innerWidth <= 500 ? "200px" : "300px";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submissionLoading, setSubmissionLoading] = useState(false);
  const [messageState, setMessageState] = useState(null);
  const confirmationRef = useRef(null);

  const apiUrl = "https://portforlio-n7px.onrender.com";

  const handleSubmit = async () => {
    setSubmissionLoading(true);

    try {
      const response = await fetch(`${apiUrl}/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setMessageState(true);
      } else {
        setMessageState(false);
      }
    } catch (error) {
      console.error(error);
      setMessageState(false);
    } finally {
      setSubmissionLoading(false);
    }

    console.log("submitted");
  };

  // displaying message confirmation status
  useEffect(() => {
    const message = confirmationRef.current;

    if (messageState !== null) {
      if (message) {
        message.classList.remove("hideConfirmation");
      }
    } else {
      message.classList.add("hideConfirmation");
    }

    console.log(messageState);
  }, [messageState]);

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
            end: "top 30%",
            scrub: 3,
          },
        }
      );
    }

    // animating input forms
    if (inputFormRefs.current && inputFormRefs.current.length > 0) {
      inputFormRefs.current.forEach((ref, index) => {
        if (index === 0 || index === 2) {
          if (ref) {
            gsap.fromTo(
              ref,
              { x: 100 },
              {
                x: 0,
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
        }

        if (index === 1) {
          if (ref) {
            gsap.fromTo(
              ref,
              { x: -100 },
              {
                x: 0,
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
        }
      });
    }
  }, []);

  return (
    <section id="contactMe">
      <h1 className="sectionHeading" ref={headingRef}>
        <span className="headingNum">03. </span>CONTACT ME
      </h1>

      <div className="line mb-5" ref={lineRef}></div>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <div className="formGrp">
          <label htmlFor="name">Name:</label>
          <input
            autoComplete={"true"}
            placeholder="Enter your name"
            type="text"
            id="name"
            value={formData.name}
            ref={(el) => (inputFormRefs.current[0] = el)}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
            required
          />
        </div>

        <div className="formGrp">
          <label htmlFor="email">Email:</label>
          <input
            autoComplete={"true"}
            placeholder="Enter your email"
            type="email"
            inputMode="email"
            id="email"
            value={formData.email}
            ref={(el) => (inputFormRefs.current[1] = el)}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            required
          />
        </div>

        <div className="formGrp">
          <label htmlFor="message">Message:</label>
          <textarea
            placeholder="Enter your message"
            className="h-32 max-h-32"
            type="text"
            id="message"
            value={formData.message}
            ref={(el) => (inputFormRefs.current[2] = el)}
            onChange={(e) =>
              setFormData({
                ...formData,
                message: e.target.value,
              })
            }
            required
          />
        </div>

        {submissionLoading && (
          <CircularProgress color="neutral" variant="indeterminate" size={30} />
        )}

        <span
          className={`confirmationText hideConfirmation ${
            messageState ? "text-green-500" : "text-red-500"
          }`}
          ref={confirmationRef}
        >
          {messageState ? "Sent successfully" : "Failed to send"}
        </span>

        <button className="px-2 py-1 rounded-md w-24 text-center font-semibold bg-orange-400 hover:bg-orange-400 hover:scale-110 transition ease-in-out duration-100">
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactMe;
