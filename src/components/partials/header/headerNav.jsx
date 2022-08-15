import React from "react"
import { NavLink } from "react-router-dom"
import PropTypes from "prop-types"

function HeaderNav({ nav, color }) {
  return (
    <div className="headerNav">
      {nav.map((el) => (
        <NavLink
          className="headerNav__link"
          to={el.to}
          key={el.name}
          style={{
            color,
          }}
        >
          {el.name}
        </NavLink>
      ))}
    </div>
  )
}

export default HeaderNav
HeaderNav.propTypes = {
  /**
   * Data from store - Array of objects with link paths and labels
   */
  nav: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  /**
   * Color of header menu navigation links
   */
  color: PropTypes.string.isRequired,
}
