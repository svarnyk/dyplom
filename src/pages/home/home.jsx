/* eslint-disable */
import React, { useEffect, useState } from "react";
import DefaultLayout from "../../components/layouts/common/common";
import "./home.css";
import PropTypes from "prop-types";
import Heading from "../../components/primitives/heading/heading";
import Button from "../../components/primitives/button/button";
import BestCreators from "../../components/partials/bestCreators/bestCreators";
import Modal from "../../components/partials/modal/modal";


export default function HomePage(props) {
  const[users, setUsers] = useState([]);
  async function loadUsers() {
    const server = "https://wonderful-app-lmk4d.cloud.serverless.com/user";
    const response = await fetch(server, { method: "GET" });
    const responseAnswer = await response.json();
    if (response.ok) {
      setUsers(responseAnswer);
    }
  }


  return (
    <DefaultLayout
      isHeaderOpen={props.isHeaderOpen}
      userName={props.userName}
      userPicUrl={props.userPicUrl}
      userPicAlt={props.userPicAlt}
    >
      <div className="homePage__wrapper">
        <div className="homePage__heading">
          <Heading weight={1}>Welcome To <span style={{ color: "#FF6363" }}>VideoNova</span></Heading>
        </div>
        <div className="homePage__greeting">
          <Heading weight={5}>Create videos with a single click. Add subtitles, transcribe audio and more</Heading>
        </div>
        <div className="homePage__button">
          <Button
            label={"Start Now"}
            variant={"primary"}
            onClick={loadUsers}
          />
        </div>
        <div className="homePage__users">
          <BestCreators
            content={users}
          />
        </div>
      </div>
      <Modal />
    </DefaultLayout>
  );
}


HomePage.PropTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      userName: PropTypes.string,
      userPic: PropTypes.string
    })),
  isHeaderOpen: PropTypes.bool,
  userName: PropTypes.string,
  userPicUrl: PropTypes.string,
  userPicAlt: PropTypes.string,
  homeButtonOnClick: PropTypes.func
};
HomePage.defaultProps = {
  content: [{
    "slug": "vitalii",
    "userPic": "https://i.pravatar.cc/150?u=vitalii",
    "id": "246aac98343e9c28f32860533b473086",
    "userName": "Vitalii"
  }, {
    "slug": "test2",
    "userPic": "https://i.pravatar.cc/150?u=test2",
    "id": "4ee1d1038e55a16949777ea305328f92",
    "userName": "test2"
  }, {
    "slug": "buba1425",
    "userPic": "https://i.pravatar.cc/150?u=buba1425",
    "id": "782988deba5963f9481970632829ad1d",
    "userName": "Buba1425"
  }, {
    "slug": "testxxxxsa",
    "userPic": "https://i.pravatar.cc/150?u=testxxxxsa",
    "id": "9acba7b14e8e7a70a6e6c7bb12416323",
    "userName": "testxxxxsa"
  }, {
    "slug": "vitalii_hrozynskyi2",
    "userPic": "https://i.pravatar.cc/150?u=vitalii_hrozynskyi2",
    "id": "a1c428089d31ecb1d3d439422986c1f6",
    "userName": "Vitalii Hrozynskyi2"
  }, {
    "slug": "test",
    "userPic": "https://i.pravatar.cc/150?u=test",
    "id": "d40f4474ac02b1b505e46e6246e87f0e",
    "userName": "test"
  }, {
    "slug": "vitalii_hrozynskyi",
    "userPic": "https://i.pravatar.cc/150?u=vitalii_hrozynskyi",
    "id": "ddffcd7b27e8e0ddf48098f48233dbbe",
    "userName": "Vitalii Hrozynskyi"
  }, {
    "slug": "hrozynskyi",
    "userPic": "https://i.pravatar.cc/150?u=hrozynskyi",
    "id": "e1a67d441e27cccbc66200420511f45b",
    "userName": "Hrozynskyi"
  }],
  isHeaderOpen: false,
  userName: "Chester",
  userPicUrl: "https://faunistics.com/wp-content/uploads/2019/02/1-4-735x628.jpg",
  userPicAlt: "UserPic",
  homeButtonOnClick: undefined
};

