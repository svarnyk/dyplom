import React from "react"
import { NavLink } from "react-router-dom"
import PropTypes from "prop-types"
import HeaderSelectRegion from "./headerSelectRegion"
import { useHeaderInfo } from "./useSiteInfo"

function HeaderSubNav({ subNav, color }) {
  const { selectVariants } = useHeaderInfo()
  return (
    <div className="headerSubNav">
      {subNav.map((el) => (
        <NavLink
          className="headerSubNav__link"
          to={el.to}
          key={el.name}
          style={{
            color,
          }}
        >
          {el.name}
        </NavLink>
      ))}
      <div className="headerSubNav__select">
        <HeaderSelectRegion variant={selectVariants.dark} />
      </div>
    </div>
  )
}

export default HeaderSubNav
HeaderSubNav.propTypes = {
  /**
   * Data from store- (Array of objects with link paths and labels
   */
  subNav: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  /**
   * Color of header submenu navigation links
   */
  color: PropTypes.string.isRequired,
}
