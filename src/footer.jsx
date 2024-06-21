import copy from "clipboard-copy";

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/oseji" target="_blank" className="footerLink">
        Github
      </a>

      <a
        href="https://x.com/osejiiii?s=21"
        target="_blank"
        className="footerLink"
      >
        Twitter
      </a>

      <a
        onClick={() => {
          copy("oseoziegbe0@gmail.com")
            .then(alert("Copied email: oseoziegbe0@gmail.com"))
            .catch((err) => console.log(err));
        }}
        href="mailto:oseoziegbe0@gmail.com"
        className="footerLink"
      >
        Email
      </a>

      <p
        onClick={() => {
          copy("+234 70 1995 2903")
            .then(alert("Copied number: +234 70 1995 2903"))
            .catch((err) => console.log(err));
        }}
        className="footerLink"
      >
        Phone
      </p>
    </footer>
  );
};

export default Footer;
