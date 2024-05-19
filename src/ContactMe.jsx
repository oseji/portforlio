import { motion } from "framer-motion";
import copy from "clipboard-copy";

const ContactMe = ({ isThemeToggled }) => {
  const iconTwitter = (
    <svg
      class="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill={isThemeToggled ? "white" : "#000000"}
      viewBox="0 0 20 20"
    >
      <path
        fill="currentColor"
        d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"
      />
    </svg>
  );
  const copySVG = (
    <svg
      stroke="currentColor"
      fill={isThemeToggled ? "white" : "#000000"}
      strokeWidth="0"
      viewBox="0 0 448 512"
      className="cursor-pointer hover:scale-110 duration-200 ml-3 "
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"></path>
    </svg>
  );

  return (
    <section id="contactMe">
      <motion.h1
        className="sectionHeading"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.5 },
        }}
      >
        <span className="headingNum">03. </span>WHATS NEXT ?
      </motion.h1>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { duration: 1 },
        }}
      >
        <h2 className="text-center text-2xl mt-10">Contact me</h2>

        <div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.5 },
          }}
          className="contactIconGrp"
        >
          <a href="https://github.com/oseji" target="_blank">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <a
            href="https://x.com/osejiiii?s=21"
            target="_blank"
          >
            {iconTwitter}
          </a>
        </div>

        <p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.5 },
          }}
          className="text-center mt-10"
        >
          Are you interested in working together? Let's schedule a time to chat.
        </p>

        <div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.5 },
          }}
          className="flex flex-row items-center gap-5 justify-center mt-5 mb-5"
        >
          <p>oseoziegbe0@gmail.com</p>

          <button
            onClick={() => {
              copy("oseoziegbe0@gmail.com")
                .then(alert("Copied email"))
                .catch((err) => console.log(err));
            }}
          >
            {copySVG}
          </button>
        </div>

        <div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.5 },
          }}
          className="flex flex-row items-center gap-5 justify-center mb-10"
        >
          <a
            href="https://wa.me/+234 70 1995 2903"
            target="_blank"
            className="hover:text-orange-400"
          >
            +234 70 1995 2903
          </a>

          <button
            onClick={() => {
              copy("+234 70 1995 2903")
                .then(alert("Copied number"))
                .catch((err) => console.log(err));
            }}
          >
            {copySVG}
          </button>
        </div>

        <a
          href="mailto:oseoziegbe0@gmail.com"
          className={`emailBtn ${isThemeToggled ? "text-white" : "text-black"}`}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.5 },
          }}
        >
          Send me an email
        </a>
      </motion.div>
    </section>
  );
};

export default ContactMe;
