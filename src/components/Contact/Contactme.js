import React from "react";
import "./Contact.css";

const Contactme = () => {
  return (
    <div className="container-ctc">
      <div className="heading-ctc">Feel Free to Contact us</div>
      <div className="main-container">
        <div className="left-side-contact">
          <h3 className="get-in-touch">Get in touch</h3>
          <h3>
            Email: <span className="email"> jangirtechs3@gmail.com</span>
          </h3>
          <h3>
            Phone: <span className="email"> +919672441704</span>
          </h3>
        </div>
        <div className="contact-form">
          <form action="#" method="POST" className="form-contact">
            <input
              className="input-feild"
              type="text"
              name="username"
              placeholder="Name"
              autoComplete="off"
              required
            />
            <input
              className="input-feild"
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />
            <textarea
              className="input-feild"
              name="message"
              placeholder="Your message"
              cols="30"
              rows="6"
              autoComplete="off"
              required
            ></textarea>
            <input type="submit" className="contact-btn" value="SUBMIT" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
