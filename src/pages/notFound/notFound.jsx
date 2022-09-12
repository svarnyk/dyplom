import React from "react";

import DefaultLayout from "../../components/layouts/common/common";
import Heading from "../../components/primitives/heading/heading";

export default function NotFoundPage() {
  return (
    <DefaultLayout>
      <div className="notFound__errorMessage">
        <Heading weight={1}>
          404 error. <span style={{ color: "#FF6363" }}>Page</span> Not Found
        </Heading>
      </div>
    </DefaultLayout>
  );
}
