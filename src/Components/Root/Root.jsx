import React from "react";
import Header from "../Header/Header";
import "./Root.css";
import Banner from "../Banner/Banner";
import { Outlet } from "react-router-dom";
import Statistics from "../Satistics/Satistics";
const Root = () => {
  return (
    <div className="font-style">
      <div className="max-w-6xl mx-auto">
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <Statistics></Statistics>
    </div>
  );
};

export default Root;
