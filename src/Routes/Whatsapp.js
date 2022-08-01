import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./Whatsapp.css";

const Whatsapp = () => {
  return (
    <div className="whatsapp">
      <a href="https://wa.me/919672441704">
        <div className="box-text">
          Need help?<span> Chat with us</span>
        </div>
      </a>
      <div className="whatsapp-float">
        <a href="https://wa.me/919672441704">
          <FaWhatsapp
            className="icons-foo"
            size={31}
            style={{ color: "#2db742" }}
          />
        </a>
      </div>
    </div>
  );
};

export default Whatsapp;
