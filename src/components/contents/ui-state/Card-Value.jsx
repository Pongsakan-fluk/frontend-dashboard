import React, { useState, useEffect, cloneElement } from "react";


function CardValue({ line, pg, title, icon, value, unit, vprogress }) {
  return (
  <div className={`w-full rounded-md flex justify-between p-4 bg-white border-b-4 ${line} shadow-md`}>
      <div className="uppercase text-slate-400">
        <p>{title}</p>
        <span className="flex mt-5 items-center space-x-2">
          {/* <FiChevronUp size={30} className="text-success"/> */}
          {icon && cloneElement(icon)}
          <h3 className="text-2xl font-bold text-black">{value} <span className="text-slate-400">{unit}</span></h3>
        </span>
      </div>

      <div
        className={`radial-progress text-${pg}`}
        style={{ "--value": `${vprogress}` }}
        role="progressbar"
      >
        {vprogress}%
      </div>
    </div>
  );
}

export default CardValue;
