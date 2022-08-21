import React from "react";
import "./footer.css";
import Heading from "../../primitives/heading/heading";
import Logo from "../../primitives/logo/logo";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__logo">
          <Logo color={"white"}/>
        </div>
        <div className="footer__about">
          <Heading weight={4}>All Rights Reserved 2022</Heading>
        </div>
        <div className="footer__social">
          <a className="social__telegram" href="https://web.telegram.org"><FaTelegramPlane color={"white"} size={"33px"}/></a>
          <a className="social__discord" href="https://discord.com"><FaDiscord color={"white"} size={"33px"}/></a>
          <a className="social__twitter" href="https://twitter.com"><FaTwitter color={"white"} size={"33px"}/></a>
        </div>
      </div>
    </div>
  );
}
