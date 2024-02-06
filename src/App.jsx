import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

//Components&Pages
import HomePage from "./pages/HomePage";
import ManageEmployeePage from "./pages/ManageEmployeePage";
import ManageProductPage from "./pages/ManageProductPage";
import RegisterPage from "./pages/RegisterPage";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <>
      <Routes>
        {/* Route manage */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path=":taxid" element={<HomePage />} />
          <Route path="/manage-employee" element={<ManageEmployeePage />}>
            <Route path=":taxid" element={<ManageEmployeePage />} />
          </Route>
          <Route path="/manage-product" element={<ManageProductPage />}>
            <Route path=":taxid" element={<ManageProductPage />} />
          </Route>
        </Route>

        {/* Route register */}
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
