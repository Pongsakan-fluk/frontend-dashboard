import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function TableIncome({ handleClose }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  let { taxid } = useParams();

  const fetchData = () => {
    setLoading(true);

    axios
      .get(`https://piya-cloud.onrender.com/api/dbd/companyData/${taxid}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [taxid]);

  return (
    <div className="modal modal-open">
      <div className="modal-box w-full max-w-6xl text-center text-black">
        <button
          onClick={handleClose}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>
        <h2 className="text-slate-600">กำไร/ขาดทุน</h2>

        {loading ? (
          <span className="loading loading-bars text-primary w-1/5 inset-x-1/3 inset-y-1/3 z-10"></span>
        ) : (
          <div className="overflow-x-auto mt-5">
            <table className="table table-xs table-zebra table-pin-rows text-center">
              <thead>
                <tr>
                  <th>ปี</th>
                  <th>รายได้หลัก</th>
                  <th>รายได้รวม</th>
                  <th>ต้นทุนขาย</th>
                  <th>กำไร(ขาดทุน) ขั้นต้น</th>
                  <th>ค่าใช้จ่ายในการขายและบริหาร</th>
                  <th>รายจ่ายรวม</th>
                  <th>ดอกเบี้ยจ่าย</th>
                  <th>กำไร(ขาดทุน) ก่อนภาษี</th>
                  <th>ภาษีเงินได้</th>
                  <th>กำไร(ขาดทุน) สุทธิ</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.incomeStatement.map((item, idx) => (
                    <tr key={idx}>
                      <td>{item.year}</td>
                      <td>{item.revenueFromSalesServices}</td>
                      <td>{item.totalRevenue}</td>
                      <td>{item.costOfGoodsSold}</td>
                      <td>{item.grossProfitLoss}</td>
                      <td>{item.sellingAdminExpenses}</td>
                      <td>{item.totalExpenses}</td>
                      <td>{item.interestExpenses}</td>
                      <td>{item.profitLossBeforeIncomeTax}</td>
                      <td>{item.incomeTaxExpense}</td>
                      <td>{item.netProfitLoss}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default TableIncome;
