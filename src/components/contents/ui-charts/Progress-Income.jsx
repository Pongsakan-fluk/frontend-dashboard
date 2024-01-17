import React, { useState, useEffect } from "react";
import { FiSettings } from "react-icons/fi";

function ProgressIncome() {
  return (
    <div className="w-full bg-white flex flex-col rounded-lg px-10 drop-shadow-lg">
      <div className="my-5 flex justify-between items-center">
        <h3>Income</h3>
        <FiSettings size={25} className="text-slate-500 cursor-pointer" />
      </div>
      <hr className="bg-slate-200" />

      <div
        className="radial-progress bg-slate-200 border-8 text-primary mx-auto my-20 h-44 w-44"
        style={{ "--value": 70, "--size": "11rem", "--thickness": "1rem" }}
        role="progressbar"
      >
        70%
      </div>

      <div className="w-full my-5">
        <span className="flex items-center space-x-2 text-warning font-bold">
          <p>32%</p>
          <progress
            className="progress progress-warning "
            value="32"
            max="100"
          ></progress>
        </span>
        <p className="text-slate-400 text-sm">Spendings Target</p>
      </div>
    </div>
  );
}

export default ProgressIncome;
