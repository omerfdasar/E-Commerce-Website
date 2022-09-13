import React from "react";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="footer-container">
      <p>{year} Omer Headphones All rights reserverd</p>
      <p className="icons">
        <a href="https://www.linkedin.com/in/omer-dasar/" target="_blank">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/omerfdasar" target="_blank">
          <AiOutlineGithub />
        </a>
      </p>
    </div>
  );
};

export default Footer;
