import React from "react"
import PropTypes from "prop-types"
import { useSocialIcons } from "./useSiteInfo"
import Icon from "../../primitives/icon/icon"
import AdaptiveLink from "../../primitives/adaptiveLink"

function HeaderSocial({ color }) {
  const socialIcons = useSocialIcons()
  return (
    <div className="headerSocial">
      {socialIcons.map((el) => (
        <div className="headerSocial__link" key={el.name}>
          <AdaptiveLink action={el.to} target="_blank" rel="noreferrer">
            <Icon name={el.name} size="26px" color={color} />
          </AdaptiveLink>
        </div>
      ))}
    </div>
  )
}

export default HeaderSocial
HeaderSocial.propTypes = {
  /**
   * Icons render color
   */
  color: PropTypes.string.isRequired,
}
