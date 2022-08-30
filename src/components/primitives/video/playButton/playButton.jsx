import React from "react";
import {BsFillPlayFill} from "react-icons/bs"
import "./playButton.css";

export default function PlayButton() {
  return (
    <div className="playButton">
      <BsFillPlayFill
        size={"20px"}
        color={"rgba(255, 255, 255, 0.8)"}
      />
    </div>
  )
}
