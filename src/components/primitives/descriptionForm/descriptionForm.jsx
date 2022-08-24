import React from "react";
import PropTypes from "prop-types";
import Heading from "../heading/heading";
import "./descriptionForm.css"

export default function DescriptionForm(props) {
  const classNameTextForm = `descriptionForm__textForm descriptionForm__textForm_${props.disabled}`
  return (
    <div className="descriptionForm">
      <div className="descriptionForm__heading">
        <Heading weight={3}>{props.heading}</Heading>
      </div>
      <label>
        <textarea
          className={classNameTextForm}
          rows={4}
          placeholder={props.placeholder}
          disabled={props.disabled}
        ></textarea>
      </label>
    </div>
  )
}

DescriptionForm.PropTypes = {
  placeholder: PropTypes.string,
  heading: PropTypes.string,
  disabled: PropTypes.bool,
}

DescriptionForm.defaultProps = {
  placeholder: undefined,
  heading: undefined,
  disabled:false,
}
