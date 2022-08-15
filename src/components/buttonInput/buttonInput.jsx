import React, { useCallback, useState } from "react"
import PropTypes from "prop-types"
import Button from "../primitives/button/button"
import "./buttonInput.css"

export default function ButtonInput({
  withButton,
  buttonLabel,
  buttonOnClick,
  placeholder,
}) {
  const [inputState, setInputState] = useState("")

  const handleButtonClick = useCallback(() => {
    if (typeof buttonOnClick === "function") buttonOnClick(inputState)
  }, [buttonOnClick, inputState])

  const handleInputChange = (el) => setInputState(el.target.value)
  const renderButton = (withButton ?? true) && buttonLabel && buttonOnClick

  return (
    <div className="buttonInput">
      <div className="buttonInput__input">
        <input
          type="text"
          value={inputState}
          onChange={handleInputChange}
          placeholder={placeholder}
        />
      </div>
      {/* renders Button component only if we have all of his props */}
      {/* if withButton props is undefined or null - applies default true value */}
      {renderButton && (
        <div className="buttonInput__button">
          <Button label={buttonLabel} onClick={handleButtonClick} />
        </div>
      )}
    </div>
  )
}

ButtonInput.propTypes = {
  /**
   * Placeholder text
   */
  placeholder: PropTypes.string,
  /**
   * Activates Button component;
   * If withButton props is undefined or null - applies default true value
   */
  withButton: PropTypes.bool,
  /**
   * Button label text.
   * * Required for Button render
   */
  buttonLabel: PropTypes.string,
  /**
   * Handles function on button click with input content as argument:
   * `(submit) => alert('submit recieved: ' + submit)`
   * * Required for Button render
   */
  buttonOnClick: PropTypes.func,
}

ButtonInput.defaultProps = {
  placeholder: undefined,
  withButton: true,
  buttonLabel: "ok",
  buttonOnClick: undefined,
}
