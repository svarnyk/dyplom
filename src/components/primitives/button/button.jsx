import React from "react"
import "./button.css"
import PropTypes from "prop-types"

import AdaptiveLink from "../adaptiveLink"

export default function Button({
  className,
  variant,
  onClick,
  stretch,
  disabled,
  children,
  label,
  ...props
}) {
  // defining button class
  const buttonClasses = className
    ? ["button", ...className.split(" ")]
    : ["button"]
  buttonClasses.push(`button_${variant || "primary"}`)

  if (disabled) buttonClasses.push("button_disabled")
  if (stretch) buttonClasses.push("button_stretch")
  return (
    <AdaptiveLink
      className={buttonClasses.join(" ")}
      action={onClick}
      {...props}
    >
      {children || label}
    </AdaptiveLink>
  )
}

Button.propTypes = {
  /**
   * button class
   */
  className: PropTypes.string,
  /**
   *This will be a button title, also you can put title inside Button ta
   */
  label: PropTypes.string,
  /**
   * Content to put inside block.
   * Could be any react node
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),

  /**
   *Renders one of the selected visual styles
   * default variant is `gradient`
   */
  variant: PropTypes.oneOf(["primary", "transparent", "link"]),
  /**
   * Forces the button to occupy the full width of its container
   */
  stretch: PropTypes.bool,
  /**
   * Disables all button interactions
   */
  disabled: PropTypes.bool,
  /**
   * Can be function or text. If text is provided, will render button as link component.
   * Internal links will be rendered with Link component.
   */
  onClick: PropTypes.oneOf([PropTypes.func, PropTypes.string]),
}

Button.defaultProps = {
  className: undefined,
  label: undefined,
  children: undefined,
  variant: "primary",
  stretch: false,
  disabled: false,
  onClick: undefined,
}
