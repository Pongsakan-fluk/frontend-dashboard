import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//functions
import { readCompanyData } from "../../functions/companyData";


function TableFinancial({ handleClose }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  let { taxid } = useParams();

  const fetchData = () => {
    setLoading(true);

    readCompanyData(taxid)
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
        <h2 className="text-slate-600">งบการเงิน</h2>

        {loading ? (
          <span className="loading loading-bars text-primary w-1/5 inset-x-1/3 inset-y-1/3 z-10"></span>
        ) : (
          <div className="overflow-x-auto mt-5">
            <table className="table table-xs table-zebra table-pin-rows text-center">
              <thead>
                <tr>
                  <th>ปี</th>
                  <th>ลูกหนี้การค้าสุทธิ</th>
                  <th>สินค้าคงเหลือ</th>
                  <th>สินทรัพย์หมุนเวียน</th>
                  <th>ที่ดินอาคารและอุปกรณ์</th>
                  <th>สินทรัพย์ไม่หมุนเวียน</th>
                  <th>สินทรัพย์รวม</th>
                  <th>หนี้สินหมุนเวียน</th>
                  <th>หนี้สินไม่หมุนเวียน</th>
                  <th>หนี้สินรวม</th>
                  <th>ส่วนของผู้ถือหุ้น</th>
                  <th>หนี้สิ้นรวมและส่วนของผู้ถือหุ้น</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                data.financialPosition.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.year}</td>
                    <td>{item.accountsReceivable}</td>
                    <td>{item.inventories}</td>
                    <td>{item.totalCurrentAssets}</td>
                    <td>{item.propertyPlantEquipment}</td>
                    <td>{item.totalNonCurrentAssets}</td>
                    <td>{item.totalAssets}</td>
                    <td>{item.totalCurrentLiabilities}</td>
                    <td>{item.totalNonCurrentLiabilities}</td>
                    <td>{item.totalLiabilities}</td>
                    <td>{item.equity}</td>
                    <td>{item.totalLiabilitiesEquity}</td>
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

export default TableFinancial;
