import React from "react";
import {AiOutlineEyeInvisible} from "react-icons/ai";
import {AiOutlineEye} from "react-icons/ai";
import PropTypes from "prop-types";
import "./input.css";

export default function Input(props) {
  // const [inputState, setInputState] = useState("")
  //
  // const handleButtonClick = useCallback(() => {
  //   if (typeof buttonOnClick === "function") buttonOnClick(inputState)
  // }, [buttonOnClick, inputState])
  //
  // const handleInputChange = (el) => setInputState(el.target.value)
  // const renderButton = (withButton ?? true) && buttonLabel && buttonOnClick
  let type = "text";
  const closeEye = () => {
    return (
      <div className="input__closeEye" onClick={()=>{type="password"}}>
        <AiOutlineEyeInvisible  size={"20px"}/>
      </div>
    )
  }
  const openEye = () => {
    return (
      <div className="input__openEye" onClick={()=>{type="text"}}>
        <AiOutlineEye size={"20px"}/>
      </div>
    )
  }
  if (props.variant === "text") {
    type = "text"
  } else if (props.variant === "password") {
    type = "password"
  }
  const className = `input input_${props.variant}`
  return (
    <div className={className}>
      <input
        // type="text"
        // value={inputState}
        // onChange={handleInputChange}
        placeholder={props.placeholder}
        type={type}
        disabled={props.disabled}
      />
      <div className="input__revealPassword">{closeEye()}</div>
    </div>
  )
}

Input.propTypes = {
  variant: PropTypes.oneOf(["text", "password"]),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  /**
   * Handles function on button click with input content as argument:
   * `(submit) => alert('submit recieved: ' + submit)`
   * * Required for Button render
   */
  // buttonOnClick: PropTypes.func,
}

Input.defaultProps = {
  variant: "text",
  placeholder: undefined,
  disabled: false,
  // buttonOnClick: undefined,
}
