import React from "react";

import DefaultLayout from "../../components/layouts/common/common";
import Heading from "../../components/primitives/heading/heading";

export default function UserNotFoundPage() {
  return (
    <DefaultLayout>
      <div className="userNotFound__errorMessage">
        <Heading weight={1}>
          Could not find the <span style={{ color: "#FF6363" }}>User</span>
        </Heading>
      </div>
    </DefaultLayout>
  );
}
