import React from "react"
import { useDispatch } from "react-redux"
import PropTypes from "prop-types"
import { useRegionInfo } from "./useSiteInfo"
import SolidSelect from "../../primitives/solidSelect/solidSelect"

function HeaderSelectRegion({ variant }) {
  const { region, options, placeholder, isDisabled } = useRegionInfo()

  const dispatch = useDispatch()
  const changeRegion = (el) => {
    const { value } = el
    dispatch({
      type: "siteInfo/setRegion",
      payload: value,
    })
  }
  return (
    <SolidSelect
      value={region}
      options={options}
      placeholder={placeholder}
      isDisabled={isDisabled}
      variant={variant}
      onChange={changeRegion}
    />
  )
}

export default HeaderSelectRegion
HeaderSelectRegion.propTypes = {
  /**
   * Appearance option of select component
   */
  variant: PropTypes.oneOf(["transparentForLight", "transparentForDark"])
    .isRequired,
}
