/* eslint-disable */
import "./style.css"

function Placeholder(props) {
  const {
    title = "Default",
    size: { height = "auto", width = "auto", maxWidth = "none" } = {},
    marginBottom = 0,
  } = props

  return (
    <div
      className="tech__placeholder"
      style={{ maxWidth, marginBottom, height, width, backgroundColor: "#ccc" }}
    >
      {title}
    </div>
  )
}

export default Placeholder
