import React from "react"
import PropTypes from "prop-types"
import "./siteBlock.styles.css"

function SiteBlock({
  children = null,
  fullSize = false,
  padding: { top: topPadding, bottom: botPadding } = {},
  backgroundColor,
  title,
}) {
  const styles = {}

  if (Number.isInteger(topPadding)) styles.paddingTop = `${topPadding}px`
  if (Number.isInteger(botPadding)) styles.paddingBottom = `${botPadding}px`

  if (backgroundColor) styles.backgroundColor = backgroundColor

  return (
    <div
      style={styles}
      className={`siteBlock ${fullSize ? "siteBlock_full" : ""} ${
        title ? "siteBlock_withTitle" : ""
      }`}
    >
      <div className="siteBlock__content">
        {title && <div className="siteBlock__title">{title}</div>}
        {children}
      </div>
    </div>
  )
}

export default SiteBlock

SiteBlock.propTypes = {
  /**
   * Content to put inside block.
   * Could be any react node
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,

  /**
   * Do not limit size of content container
   */
  fullSize: PropTypes.bool,

  /**
   * padding commonly used to visually separate site blocks
   */
  padding: PropTypes.shape({
    top: PropTypes.number,
    bottom: PropTypes.number,
  }),

  /**
   * block background, default is transparent
   */
  backgroundColor: PropTypes.string,

  /**
   * Site Block Title
   */
  title: PropTypes.string,
}

SiteBlock.defaultProps = {
  fullSize: undefined,
  padding: undefined,
  backgroundColor: undefined,
  title: undefined,
}
