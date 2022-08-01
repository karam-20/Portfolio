import React from "react";
import "./Contact.css";

const Contactme = () => {
  return (
    <div className="container-ctc">
      <div className="heading-ctc">Feel Free to Contact us</div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.3854919179785!2d78.25968211497887!3d26.020940083519715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976de6e2cd33583%3A0xcadb08fbf8b66e1f!2sRustamji%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1659097437586!5m2!1sen!2sin"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
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
          <input type="submit" className="contact-btn" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Contactme;
