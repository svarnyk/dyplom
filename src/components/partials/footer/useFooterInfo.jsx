import { useSelector } from "react-redux"

const up = () => {
  const top = Math.max(
    document.body.scrollTop,
    document.documentElement.scrollTop
  )
  if (top > 0) {
    window.scrollBy({
      top: -top,
      behavior: "smooth",
    })
  }
}

export default function useFooterInfo() {
  const siteInfo = useSelector((store) => store.siteInfo)
  console.log(siteInfo)
  return {
    ...siteInfo.footerInfo,
    up,
  }
}
