import React from "react"
import isInternalLink from "./isInternalLink"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

function AdaptiveLink({ action, children, ...props }) {
  if (!action) {
    return <span {...props}>{children}</span>
  }
  if (typeof action === "function") {
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <span role="button" tabIndex="0" onClick={action} {...props}>
        {children}
      </span>
    )
  }

  if (isInternalLink(action) && typeof action === "string") {
    return (
      <Link to={action} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <a href={action} {...props}>
      {children}
    </a>
  )
}

AdaptiveLink.propTypes = {
  /**
   * Content to put inside block.
   * Could be any react node
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,

  action: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
}

AdaptiveLink.defaultProps = {
  action: undefined,
}

export default AdaptiveLink
