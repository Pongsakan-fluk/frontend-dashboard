import React, { useState, useEffect } from "react";
import { FiChevronUp, FiChevronDown, FiDollarSign, FiPlus } from "react-icons/fi";


import CardValue from "../components/contents/ui-state/Card-Value";
import TrafficSource from "../components/contents/ui-charts/Traffic-source";
import ProgressIncome from "../components/contents/ui-charts/Progress-Income";
import SimpleTable from "../components/contents/table/Simple-Table";


function HomePage() {
  return (
    <div className="w-full min-h-screen bg-slat-100 py-10 px-2 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <CardValue
          line="border-blue-500"
          pg="primary"
          title="new accounts"
          icon={<FiChevronUp size={30} className="text-success" />}
          value={234}
          unit="%"
          vprogress={100}
        />
        <CardValue
          line="border-red-500"
          pg="error"
          title="total expenses"
          icon={<FiChevronDown size={30} className="text-error" />}
          value={70}
          unit="%"
          vprogress={70}
        />
        <CardValue
          line="border-yellow-500"
          pg="warning"
          title="company value"
          icon={<FiDollarSign size={30} className="text-warning" />}
          value={45}
          unit="m"
          vprogress={90}
        />
        <CardValue
          line="border-success"
          pg="success"
          title="new employees"
          icon={<FiPlus size={30} className="text-success" />}
          value={34}
          unit="hires"
          vprogress={81}
        />
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 my-5">
        <TrafficSource />

        <ProgressIncome />
      </div>

      <div className="w-full mt-5">
        <SimpleTable />
      </div>
    </div>
  );
}

export default HomePage;
