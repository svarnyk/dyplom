import React from "react"
import "./style.css"
import PropTypes from "prop-types"
import Icon from "../../primitives/icon/icon"

export default function SocialIcons(props) {
  const { social } = props
  return (
    <div className="footerIcons">
      <div className="icons">
        {social.map((value) => (
          <a href={value.to}>
            <Icon name={value.name} size="30px" color="white" />
          </a>
        ))}
      </div>
    </div>
  )
}

SocialIcons.defaultProps = {
  social: undefined,
}

SocialIcons.propTypes = {
  social: PropTypes.string,
}
