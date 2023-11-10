import React from "react";
import Header from "../Header/Header";
import "./Root.css";
import Banner from "../Banner/Banner";
import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <div className="font-style">
      <div className="max-w-6xl mx-auto">
        <Header></Header>
        <Banner></Banner>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
