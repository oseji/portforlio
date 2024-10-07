import { useEffect, useRef, useState } from "react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [messageState, setMessageState] = useState(null);
  const confirmationRef = useRef(null);

  const apiUrl = "https://portforlio-n7px.onrender.com";

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        //alert("Message sent sucessfully");
      } else {
        setMessageState(false);
        //alert("Failed to send message,please try again");
      }
    } catch (error) {
      console.error(error);
      setMessageState(false);
      alert("Failed to send message,please try again");
    }
  };

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

  return (
    <section id="contactMe">
      <form onSubmit={handleSubmit}>
        <h1 className="sectionHeading">
          <span className="headingNum">03. </span>CONTACT ME
        </h1>

        <div className="formGrp">
          <label htmlFor="name">Name:</label>
          <input
            autoComplete={true}
            placeholder="Enter your name"
            type="text"
            id="name"
            value={formData.name}
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
            autoComplete={true}
            placeholder="Enter your email"
            type="email"
            id="email"
            value={formData.email}
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
            onChange={(e) =>
              setFormData({
                ...formData,
                message: e.target.value,
              })
            }
            required
          />

          <span
            className={`confirmationText hideConfirmation ${
              messageState ? "text-green-500" : "text-red-500"
            }`}
            ref={confirmationRef}
          >
            {messageState ? "Sent successfully" : "Failed to send"}
          </span>
        </div>

        <button className="px-2 py-1 rounded-md w-24 text-center font-semibold bg-lightBg dark:bg-darkBg hover:bg-orange-400 hover:scale-110 transition ease-in-out duration-100">
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactMe;
