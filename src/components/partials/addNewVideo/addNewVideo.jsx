import React, {useState} from "react";
import "./addNewVideo.css";
import Heading from "../../primitives/heading/heading";
import Input from "../../primitives/input/input";
import DescriptionForm from "../../primitives/descriptionForm/descriptionForm";
import Button from "../../primitives/button/button";

export default function AddNewVideo() {
  const [inputLinkState, setInputLinkState] = useState('')
  const [inputNameState, setInputNameState] = useState('')

  return (
    <div className="addNewVideo">
      <div className="addNewVideo__wrapper">
        <div className="addNewVideo__heading">
          <Heading weight={1}>Add <span style={{color: "#FF6363"}}>New</span> Video</Heading>
        </div>
        <div className="addNewVideo__link">
          <Input
            variant={"text"}
            heading={"YouTube Link"}
            placeholder={"Past link…"}
            nameValue={inputLinkState}
            onInputNameOnChange={setInputLinkState}
          />
        </div>
        <div className="addNewVideo__name">
          <Input
            variant={"text"}
            heading={"Name of video"}
            placeholder={"Type name…"}
            nameValue={inputNameState}
            onInputNameOnChange={setInputNameState}
          />
        </div>
        <div className="addNewVideo__description">
          <DescriptionForm
            heading={"Description"}
            placeholder={"Type description…"}
          />
        </div>
        <div className="addNewVideo__buttonBlock">
          <div className="addNewVideo__buttonCansel">
            <Button
              variant={"transparent"}
              label={"Cancel"}
              // onClick={props.cancelOnClick}
            />
          </div>
          <div className="addNewVideo__button">
            <Button
              variant={"primary"}
              label={"Submit"}
              // onClick={getData}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

AddNewVideo.PropTypes = {}
AddNewVideo.defaultProps = {}
