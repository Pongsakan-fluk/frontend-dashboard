import React from "react";
import { Outlet } from "react-router-dom";
//Components
import Navbar from "../nav/Navbar";
import SideBar from "../nav/SideBar";

function Layout() {
  return (
    <>
      <Navbar />

      <main className="app md:flex bg-slate-200">
        <SideBar />

        <Outlet />
      </main>
    </>
  );
}

export default Layout;
