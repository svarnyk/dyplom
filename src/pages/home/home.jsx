/* eslint-disable */
import React, {useEffect} from "react";
import DefaultLayout from "../../components/layouts/common/common";
import "./home.css";
import Heading from "../../components/primitives/heading/heading";
import Button from "../../components/primitives/button/button";
import BestCreators from "../../components/partials/bestCreators/bestCreators";
import {useDispatch, useSelector} from "react-redux";
import { openModal } from "../../store/modules/modal";
import {fetchUsers} from "../../store/modules/usersList";
import {selectHeaderStatus} from "../../store/modules/header";


export default function HomePage() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch])
  const openPop = () => {dispatch(openModal("signUp"))}
  const headerStatus = useSelector(selectHeaderStatus)
  const visibleButton = headerStatus? {display: "none"}:null
  return (
    <DefaultLayout>
      <div className="homePage__wrapper">
        <div className="homePage__heading">
          <Heading weight={1}>Welcome To <span style={{color: "#FF6363"}}>VideoNova</span></Heading>
        </div>
        <div className="homePage__greeting">
          <Heading weight={5}>Create videos with a single click. Add subtitles, transcribe audio and more</Heading>
        </div>
        <div style={visibleButton} className="homePage__button">
          <Button
            label={"Start Now"}
            variant={"primary"}
            onClick={openPop}
          />
        </div>
        <div className="homePage__users">
          <BestCreators/>
        </div>
      </div>
    </DefaultLayout>
  );
}
