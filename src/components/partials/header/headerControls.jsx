import React from "react"
import PropTypes from "prop-types"
import Icon from "../../primitives/icon/icon"
import HeaderSelectRegion from "./headerSelectRegion"

function HeaderControls({
  mobile,
  headerIsOpen,
  toggleHeader,
  color,
  dark,
  selectVariant,
}) {
  /**
   * Swap burger icon to cross icon when header header is open,
   * change icon color to dark when header is open
   * @param isOpen: (boolean)
   * @return {{color: (string), name: (string)}}
   */
  const menuIconToggle = (isOpen) => ({
    name: isOpen ? "VscChromeClose" : "VscMenu",
    color: isOpen ? dark : color,
  })

  return (
    <div className="headerControls">
      {!mobile && (
        <div className="headerControls__select">
          <HeaderSelectRegion variant={selectVariant} />
        </div>
      )}
      {!headerIsOpen && (
        <>
          <div className="headerControls__button">
            <Icon name="CustomProfile" size="28" color={color} />
          </div>
          <div className="headerControls__button">
            <Icon name="CustomCart" size="28" color={color} />
          </div>
          <div className="headerControls__button">
            <Icon name="IoSearchOutline" size="28" color={color} />
          </div>
        </>
      )}
      {mobile && (
        <div className="headerControls__button">
          <Icon
            name={menuIconToggle(headerIsOpen).name}
            size="28"
            color={menuIconToggle(headerIsOpen).color}
            onClick={toggleHeader}
          />
        </div>
      )}
    </div>
  )
}

export default HeaderControls
HeaderControls.propTypes = {
  /**
   * Current media query status
   */
  mobile: PropTypes.bool.isRequired,
  /**
   * Current status of mobile header menu (open or closed)
   */
  headerIsOpen: PropTypes.bool,
  /**
   * Change status of mobile header menu
   */
  toggleHeader: PropTypes.func.isRequired,
  /**
   * Color scheme for header elements
   */
  color: PropTypes.string,
  /**
   * Color for elements that should remain dark
   */
  dark: PropTypes.string,
  /**
   * Appearance options of select component
   */
  selectVariant: PropTypes.string,
}
HeaderControls.defaultProps = {
  headerIsOpen: false,
  color: undefined,
  dark: undefined,
  selectVariant: undefined,
}
