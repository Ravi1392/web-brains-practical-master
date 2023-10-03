import React from "react";
import { Outlet } from "react-router";
import "./styles/MainLayout.css";
import Header from "../Header/Header";
const MainLayout = ({ children }) => {

  return (
    <div style={{ display: "flex", position: "relative", background: "#F7F8FA" }}>
      <section style={{ flex: 1 }} className="main_layout_right">
        <div style={{ background: "#FFFFFF" }}>
          <Header />
        </div>

        <div style={{ background: "#FFFFFF", marginTop: "10px" }}>
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default MainLayout;
