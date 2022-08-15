import { useSelector } from "react-redux"

export function useHeaderInfo() {
  /**
   * Retrieves header data from store
   */
  const headerInfo = useSelector((store) => store.siteInfo.headerInfo)

  /**
   * Determines color schemes for header elements
   */
  const headerColors = {
    dark: "#4A4847",
    light: "#F5F0EB",
  }
  const selectVariants = {
    dark: "transparentForLight",
    light: "transparentForDark",
  }

  return {
    ...headerInfo,
    headerColors,
    selectVariants,
  }
}

export function useRegionInfo() {
  /**
   * Retrieves region data from store
   */
  const regionInfo = useSelector((store) => store.siteInfo.regionInfo)
  return { ...regionInfo }
}

export function useSocialIcons() {
  return useSelector((store) => store.siteInfo.socialIcons)
}
