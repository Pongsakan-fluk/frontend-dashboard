import React, { useState, useEffect } from "react";

import TrafficSource from "./components/contents/ui-charts/Traffic-source";
import SideBar from "./components/nav/SideBar";
import Navbar from "./components/nav/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Navbar />

      <main className="app md:flex bg-slate-200">
        <SideBar />

        <HomePage />
      </main>
    </>
  );
}

export default App;
