import React, {useCallback, useState} from "react";
import "./addNewVideo.css";
import Heading from "../../primitives/heading/heading";
import Input from "../../primitives/input/input";
import DescriptionForm from "../../primitives/descriptionForm/descriptionForm";
import Button from "../../primitives/button/button";
import Video from "../../primitives/video/video";
import PropTypes from "prop-types";

export default function AddNewVideo(props) {
  const [inputLinkState, setInputLinkState] = useState('');
  const [inputNameState, setInputNameState] = useState('');
  const [descriptionState, setDescriptionState] = useState('');
  const [message, setMessage] = useState("");
  const [state, setState] = useState("notConfirmed");
  const className = `addNewVideo addNewVideo_${state}`;
  let data = {
    "url": undefined,
    "title": undefined,
    "description": undefined,
    "id": undefined,
    "userId": undefined,
  };

  function getData() {
    if (inputLinkState.length > 0 && inputNameState.length > 0 && descriptionState.length > 0) {
      data = {
        "url": inputLinkState,
        "title": inputNameState,
        "description": descriptionState,
        "id": "string",
        "userId": "string",
      };
      handleButtonClick();
      setMessage("Successful");
      setState("confirmed");
      setInputLinkState("")
      setInputNameState("")
      setDescriptionState("")
    }
  }
function backToStart() {
  props.toVideoOnClick()
  setState("notConfirmed")
}

  const handleButtonClick = useCallback(() => {
    if (typeof props.buttonOnClick === "function") props.buttonOnClick(data);
  }, [props.buttonOnClick, data]);

  return (
    <div className={className}>
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
            descriptionValue={descriptionState}
            onDescriptionOnChange={setDescriptionState}
          />
        </div>
        <div className="addNewVideo__video" style={{pointerEvents: "none"}}>
          <Video
            variant={"checkMark"}
            urlVideo={inputLinkState}
          />
        </div>
        <div className="addNewVideo__message">
          <Heading weight={2}>{message}</Heading>
        </div>
        <div className="addNewVideo__buttonBlock">
          <div className="addNewVideo__buttonCansel">
            <Button
              variant={"transparent"}
              label={"Cancel"}
              onClick={props.cancelOnClick}
            />
          </div>
          <div className="addNewVideo__button">
            <Button
              variant={"primary"}
              label={"Submit"}
              onClick={getData}
            />
          </div>
          <div className="addNewVideo__toVideoButton">
            <Button
              variant={"primary"}
              label={"To video"}
              onClick={backToStart}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

AddNewVideo.PropTypes = {
  cancelOnClick: PropTypes.func,
  buttonOnClick: PropTypes.func,
  toVideoOnClick: PropTypes.func,
}
AddNewVideo.defaultProps = {
  cancelOnClick: undefined,
  buttonOnClick: undefined,
  toVideoOnClick: undefined,
}
