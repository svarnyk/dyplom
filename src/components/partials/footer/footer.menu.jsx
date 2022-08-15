import React from "react"
import "./style.css"
import MediaQuery from "react-responsive"
import { NavLink } from "react-router-dom"
import PropTypes from "prop-types"

export default function Menu(props) {
  const { menu } = props
  return (
    <div className="footer_menu">
      <MediaQuery maxWidth={768}>{/* тут буде <Accordion/> */}</MediaQuery>
      <MediaQuery minWidth={769}>
        <div className="menu">
          {menu.map((value) => (
            <div className="menu_block">
              <div style={{ "padding-bottom": "16px" }}>{value.title}</div>
              {value.list.map((value1) => (
                <div>
                  <NavLink
                    style={{ "text-decoration": "none", color: "white" }}
                    to={value1.to}
                  >
                    {value1.name}
                  </NavLink>
                </div>
              ))}
            </div>
          ))}
        </div>
      </MediaQuery>
    </div>
  )
}

Menu.defaultProps = {
  menu: undefined,
}

Menu.propTypes = {
  menu: PropTypes.string,
}
