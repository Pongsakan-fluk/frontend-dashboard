import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiLayers } from "react-icons/fi";

import SimpleTable from "../components/contents/table/Simple-Table";
import AllModal from "../components/modals/AllModal";

function ManageProductPage() {

  return (
    <div className="w-full min-h-screen bg-slat-100 py-10 px-2 md:px-10">
      <div className="w-fit mb-10 text-sm text-slate-500 space-y-2">
        <span className="text-lg font-bold flex items-center space-x-2">
          <FiLayers /> <p>Manage Product</p>
        </span>
        <p>
          <Link to="/">Home</Link> /{" "}
          <span className="text-primary">Manage Product</span>
        </p>
      </div>

      <SimpleTable />

      {/* Modal */}
      <AllModal />
    </div>
  );
}

export default ManageProductPage;
