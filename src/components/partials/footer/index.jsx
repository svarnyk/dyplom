import React from "react"
import "./style.css"
import useFooterInfo from "./useFooterInfo"
import Menu from "./footer.menu"
import FooterForm from "./footer.form"
import About from "./footer.about"
import SomeInfo from "./footer.someinfo"

export default function Footer() {
  const { heading, text, scrollText, social, menu, form, someInfo, up } =
    useFooterInfo()
  return (
    <div className="footer">
      <div className="footer_wrapper">
        <About
          heading={heading}
          text={text}
          scrollText={scrollText}
          btnOnTop={up}
          social={social}
        />
        <Menu menu={menu} />
        <FooterForm form={form} />
        <SomeInfo someInfo={someInfo} />
      </div>
    </div>
  )
}
