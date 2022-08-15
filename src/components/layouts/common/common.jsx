import React from "react"
import PropTypes from "prop-types"

import { Footer, Header } from "../../partials"

export default function DefaultLayout({ headerLogo, headerColor, children }) {
  return (
    <div className="siteContent">
      <div className="siteContent__header">
        <Header logoStyle={headerLogo} color={headerColor} />
      </div>

      <div className="siteContent__content">{children}</div>
      <div className="siteContent__footer">
        <Footer />
      </div>
    </div>
  )
}

DefaultLayout.propTypes = {
  /**
   * Options for header logo
   */
  headerLogo: PropTypes.oneOf(["main", "dark", "light"]),
  /**
   * Color scheme for header elements
   */
  headerColor: PropTypes.oneOf(["dark", "light"]).isRequired,
  /**
   * Content to put inside block.
   * Could be any react node
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
DefaultLayout.defaultProps = {
  headerLogo: "main",
}
