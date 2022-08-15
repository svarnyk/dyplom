import React from "react"
import "./style.css"

export default function someInfo(props) {
  return (
    <div className="footer_someInfo">
      {props.someInfo.map((value) => (
        <div className="lowerText">
          {value.text}
          <div>
            {value.list.map((value1) => (
              <a
                href={value1.to}
                style={{ "text-decoration": "none", color: "white" }}
              >
                <span>·{value1.name}</span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
