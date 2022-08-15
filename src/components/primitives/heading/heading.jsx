import React from "react"
import "./heading.css"
import PropTypes from "prop-types"

export default function Heading({ weight, plain, children }) {
  const headWeight = Math.max(1, Math.min(weight, 6))
  const className = `heading${headWeight}`
  const TagName = plain ? "div" : `h${headWeight}`

  return <TagName className={className}>{children}</TagName>
}

Heading.propTypes = {
  /**
   *Sets heading weight from 1 to 6. Other values are adjusted to the nearest value in the range.
   */
  weight: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  /**
   * Heading text
   */
  children: PropTypes.string.isRequired,
  /**
   * if plain is set generates a div tag with the headingX class instead of the H tag
   */
  plain: PropTypes.bool,
}

Heading.defaultProps = {
  plain: false,
}
