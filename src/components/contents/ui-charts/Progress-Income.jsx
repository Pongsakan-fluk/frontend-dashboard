import React, { useState, useEffect } from "react";
import { FiSettings } from "react-icons/fi";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

function ProgressIncome() {
  const [data, setData] = useState([
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ]);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central" >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="w-full bg-white flex flex-col rounded-lg px-10 drop-shadow-lg">
      <div className="my-5 flex justify-between items-center">
        <p>Income</p>
        <FiSettings size={25} className="text-slate-500 cursor-pointer" />
      </div>
      <hr className="bg-slate-200" />

      <div className="mx-auto w-full h-80">
        <ResponsiveContainer>
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
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
