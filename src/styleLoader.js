import { useEffect } from "react"

import "./assets/css/index.css"

import FontFaceObserver from "fontfaceobserver"
import "./assets/css/font.css"

export default function StyleLoader() {
  useEffect(() => {
    const Fonts = [
      new FontFaceObserver("Averta", {}).load(),
      new FontFaceObserver("Averta", { weight: 100 }).load(),
      new FontFaceObserver("Averta", { weight: 200 }).load(),
      new FontFaceObserver("Averta", { weight: 300 }).load(),
      new FontFaceObserver("Averta", { weight: 700 }).load(),
      new FontFaceObserver("Averta", { weight: 800 }).load(),
      new FontFaceObserver("Averta", { style: "italic" }).load(),
    ]

    // When Font is loaded, add a font-family using Open Sans to the body
    Promise.all(Fonts).then(() => {
      document.body.classList.add("fontLoaded")
    })
  }, [])
  return null
}
