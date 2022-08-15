import React from "react"
import "./style.css"
import PropTypes from "prop-types"

/**
 * Компонент Image додає зображення на сторінку.
 * За замовчуванням зберігає свій розмір та не
 * адаптується під розмір контейнеру, в який буде покладений.
 */
export default function Image({ src, fit, alt = "img" }) {
  const className = `image${fit ? ` image_${fit}` : ""}`
  return <img className={className} src={src} alt={alt} />
}

Image.propTypes = {
  /**
   * Обов'язковий параметр src містить шлях до файлу з зображенням. Це може бути шлях до файлу у файловій системі, або url посилання.
   */
  src: PropTypes.string.isRequired,
  /**
   * Текстовий опис змісту зображення.
   */
  alt: PropTypes.string,
  /**
   * Адаптація розміру зображення відносно контейнера - Cover, Contain, Center. Якщо параметр fit не вказаний - рендериться inline-block.
   */
  fit: PropTypes.oneOf(["cover", "contain", "center"]),
}

Image.defaultProps = {
  alt: undefined,
  fit: undefined,
}
