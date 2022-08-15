import React, { useState } from "react"
import { useMediaQuery } from "react-responsive"
import PropTypes from "prop-types"
import Image from "../../primitives/image"
import AdaptiveLink from "../../primitives/adaptiveLink"
import { useHeaderInfo } from "./useSiteInfo"
import HeaderNav from "./headerNav"
import HeaderControls from "./headerControls"
import HeaderSubNav from "./headerSubNav"
import HeaderSocial from "./headerSocial"
import "./style.css"
import "./style.media.css"

function Header({ logoStyle, color }) {
  const { logo, nav, subNav, headerColors, selectVariants } = useHeaderInfo()

  const mobile = useMediaQuery({ query: "(max-width: 992px)" })

  const [headerIsOpen, setHeaderIsOpen] = useState(false)
  const toggleHeader = () => setHeaderIsOpen(!headerIsOpen)

  /**
   * Keeps variable styles of header and its elements
   * @type {{modifier: string, navColor: (string|*)}}
   */
  const stylesToggle = {
    modifier: `header${mobile && headerIsOpen ? " header_mobileOpen" : ""}`,
    navColor: headerIsOpen ? headerColors.dark : headerColors[color],
  }

  const render = {
    nav: !mobile || headerIsOpen,
    subNav: mobile && headerIsOpen,
    social: mobile && headerIsOpen,
  }

  return (
    <div className={stylesToggle.modifier}>
      <div className="header__logo">
        <AdaptiveLink className="logoLink" action="/" />
        <Image src={logo[logoStyle]} alt="logo" />
      </div>

      {render.nav && (
        <div className="header__nav">
          <HeaderNav nav={nav} color={stylesToggle.navColor} />
        </div>
      )}

      {render.subNav && (
        <div className="header__subNav">
          <HeaderSubNav subNav={subNav} color={headerColors.dark} />
        </div>
      )}

      {render.social && (
        <div className="header__social">
          <HeaderSocial color={headerColors.dark} />
        </div>
      )}

      <div className="header__controls">
        <HeaderControls
          mobile={mobile}
          headerIsOpen={headerIsOpen}
          toggleHeader={toggleHeader}
          color={headerColors[color]}
          dark={headerColors.dark}
          selectVariant={selectVariants[color]}
        />
      </div>
    </div>
  )
}

export default Header
Header.propTypes = {
  /**
   * Appearance options for logo
   */
  logoStyle: PropTypes.oneOf(["main", "dark", "light"]),
  /**
   * Color scheme for header elements
   */
  color: PropTypes.oneOf(["dark", "light"]).isRequired,
}
Header.defaultProps = {
  logoStyle: "main",
}
