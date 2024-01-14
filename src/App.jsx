import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

//Components&Pages
import SideBar from "./components/nav/SideBar";
import Navbar from "./components/nav/Navbar";
import HomePage from "./pages/HomePage";
import ManageEmployeePage from "./pages/ManageEmployeePage";
import ManageProductPage from "./pages/ManageProductPage";

function App() {
  return (
    <>
      <Navbar />

      <main className="app md:flex bg-slate-200">
        <SideBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/manage-employee" element={<ManageEmployeePage />} />
          <Route path="/manage-product" element={<ManageProductPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
