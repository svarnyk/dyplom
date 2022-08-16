import React from "react";
import "./footer.css";
import Heading from "../../primitives/heading/heading";
import Image from "../../primitives/image";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_wrapper">
        <div className="footer_logo">
          <Image src="../../../assets/logo/Logo_monochrome.png" alt="logo" fit={"center"}/>
        </div>
        <div className="footer_about">
          <Heading weight={4}>All Rights Reserved 2022</Heading>
        </div>
        <div className="footer_social">

        </div>
      </div>
    </div>
  );
}
