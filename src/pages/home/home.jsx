/* eslint-disable */
import React from "react";
import DefaultLayout from "../../components/layouts/common/common";
import "./home.css";
import Heading from "../../components/primitives/heading/heading";
import Button from "../../components/primitives/button/button";
import BestCreators from "../../components/partials/bestCreators/bestCreators";


export default function HomePage() {
  return (
    <DefaultLayout>
      <div className="homePage__wrapper">
        <div className="homePage__heading">
          <Heading weight={1}>Welcome To <span style={{color: "#FF6363"}}>VideoNova</span></Heading>
        </div>
        <div className="homePage__greeting">
          <Heading weight={5}>Create videos with a single click. Add subtitles, transcribe audio and more</Heading>
        </div>
        <div className="homePage__button">
          <Button
            label={"Start Now"}
            variant={"primary"}
            onClick={"./profile"}
          />
        </div>
        <div className="homePage__users">
          <BestCreators/>
        </div>
      </div>
    </DefaultLayout>
  );
}
