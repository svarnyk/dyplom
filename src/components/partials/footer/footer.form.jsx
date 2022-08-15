import React from "react"
import "./style.css"
import PropTypes from "prop-types"
import ButtonInput from "../../buttonInput/buttonInput"

export default function FooterForm(props) {
  const { form } = props
  return (
    <div className="footer_form">
      {form.map((value) => (
        <div className="form">
          <div className="form_info">
            {value.title}
            <br />
            {value.text}
          </div>
          <div className="form_input">
            <ButtonInput
              buttonLabel={value.buttonLabel}
              buttonOnClick={() => {}}
              placeholder={value.buttonInputPh}
              withButton
            />
            {value.caption}
          </div>
        </div>
      ))}
    </div>
  )
}

FooterForm.defaultProps = {
  form: undefined,
}

FooterForm.propTypes = {
  form: PropTypes.string,
}
