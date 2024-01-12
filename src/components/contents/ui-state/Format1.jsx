import React, { useState, useEffect } from "react";
import { FiChevronUp } from "react-icons/fi";

function Format1() {
  return (
    <div className="w-full rounded-md flex justify-between p-4 bg-white border-2 border-slate-200 border-b-indigo-500">
      <div className="uppercase text-slate-400">
        <p>new accounts</p>
        <span className="flex mt-5 items-center space-x-2">
          <FiChevronUp size={30} className="text-success"/>
          <h3 className="text-2xl font-bold text-black">234 <span className="text-slate-400">%</span></h3>
        </span>
      </div>

      <div
        className="radial-progress text-primary "
        style={{ "--value": 70 }}
        role="progressbar"
      >
        70%
      </div>
    </div>
  );
}

export default Format1;
