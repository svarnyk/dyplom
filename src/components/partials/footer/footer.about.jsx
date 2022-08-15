import React from "react"
import MediaQuery from "react-responsive"
import PropTypes from "prop-types"
import SocialIcons from "./footer.socialIcons"
import "./style.css"

export default function About(props) {
  const { heading, text, social, btnOnTop, scrollText } = props
  return (
    <div className="footer_about">
      <div className="footerInfo">
        <div>{heading}</div>
        <div>{text}</div>
      </div>
      <SocialIcons social={social} />
      <MediaQuery maxWidth={768}>
        <div
          className="scrollOnTop"
          role="button"
          tabIndex={0}
          onClick={() => btnOnTop()}
          onKeyDown={btnOnTop()}
        >
          {scrollText}
        </div>
      </MediaQuery>
    </div>
  )
}
About.defaultProps = {
  heading: undefined,
  text: undefined,
  social: undefined,
  btnOnTop: undefined,
  scrollText: undefined,
}

About.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  social: PropTypes.string,
  btnOnTop: PropTypes.func,
  scrollText: PropTypes.string,
}
