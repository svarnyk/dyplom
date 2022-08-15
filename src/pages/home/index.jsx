import React from "react"

import CommonLayout from "../../components/layouts/common/common"
import Placeholder from "../../components/placeholder"
import SiteBlock from "../../components/siteBlock"

export default function HomePage() {
  return (
    <CommonLayout>
      <SiteBlock>
        <Placeholder title="features" size={{ height: "50px" }} />
      </SiteBlock>
      <SiteBlock>
        <Placeholder
          title="banner1"
          size={{ height: "600px" }}
          marginBottom="40px"
        />
        <Placeholder title="banner2" size={{ height: "600px" }} />
      </SiteBlock>
      <SiteBlock>
        <Placeholder
          title="Description Text"
          size={{ height: "200px", maxWidth: "970px" }}
        />
      </SiteBlock>
      <SiteBlock>
        <Placeholder title="quiz block" size={{ height: "440px" }} />
      </SiteBlock>
      <SiteBlock title="From our community" backgroundColor="#EEDBC8" fullSize>
        <Placeholder title="carousel" size={{ height: "200px" }} />
      </SiteBlock>
    </CommonLayout>
  )
}
