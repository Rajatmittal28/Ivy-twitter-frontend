import React from "react";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import LeftBar from "../../components/leftSideContainer/LeftBar";
import RightBar from "../../components/rightSideContainer/RightBar";
import MainPost from "../../components/mainPostContainer/MainPost";
import { useSelector } from "react-redux";

function Home() {
  const userDetails = useSelector((state)=>state.user);
  
  return (
    <>
      <div>
        <Navbar />
        <div className="homeContainer">
          <div className="left">
            <LeftBar />
          </div>
          <div className="center">
            <MainPost />
          </div>
          <div className="right">
            <RightBar />
          </div> 
        </div>
      </div>
    </>
  );
}

export default Home;
