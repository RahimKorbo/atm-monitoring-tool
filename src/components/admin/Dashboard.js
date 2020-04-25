import React, { Component } from "react";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";
import Admincontent from "./AdminContent";
import DashFooter from "../common/DashFooter";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <Admincontent />
        <DashFooter />
      </div>
    );
  }
}
