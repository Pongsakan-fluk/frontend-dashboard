import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import TableDirectors from "../../modals/TableDirectors";
import TableFinancial from "../../modals/TableFinancial";
import TableIncome from "../../modals/TableIncome";

function SimpleTable() {
  const [data, setData] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [listPage, setListPage] = useState();

  //for modal
  const [director, setDirector] = useState(false);
  const [financial, setFinancial] = useState(false);
  const [income, setIncome] = useState(false);

  const navigate = useNavigate();

  const fetchData = () => {
    axios
      .get(
        `https://piya-cloud.onrender.com/api/dbd/companyData/${activePage}/10`
      )
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setActivePage(e.target.value);
  };

  const DropdownPage = () => {
    const result = [];
    for (let i = 1; i <= 189; i++) {
      result.push(i);
    }
    setListPage(result);
  };

  const handleModalDirector = (taxid) => {
    navigate(`/${taxid}`);
    setDirector(true);
  };

  const handleModalFinanc = (taxid) => {
    navigate(`/${taxid}`);
    setFinancial(true);
  };

  const handleModalIncome = (taxid) => {
    navigate(`/${taxid}`);
    setIncome(true);
  };

  const handleClose = () => {
    navigate("/");
    setDirector(false);
    setFinancial(false);
    setIncome(false);
  };


  useEffect(() => {
    fetchData();
    DropdownPage();
  }, [activePage]);

  return (
    <div className="overflow-x-auto max-h-screen bg-white border-t-4 border-indigo-500 rounded-lg drop-shadow-lg">
      <div className="my-5 flex justify-between items-center mx-5">
        <p>Table</p>
        <div className="join">
          <button
            className="join-item btn btn-xs"
            onClick={() => setActivePage(parseInt(activePage) - 1)}
          >
            «
          </button>
          <select
            value={activePage}
            onChange={handleChange}
            className="select select-ghost select-xs w-full max-w-xs"
          >
            {listPage &&
              listPage.map((item, idx) => (
                <option
                  key={idx}
                  value={item}
                  onClick={() => setActivePage(item)}
                >
                  {item}
                </option>
              ))}
          </select>
          <button
            className="join-item btn btn-xs"
            onClick={() => setActivePage(parseInt(activePage) + 1)}
          >
            »
          </button>
        </div>
      </div>
      <hr />

      <table
        className={`table table-zebra table-xs`}
      >
        <thead className="text-center">
          <tr>
            <th>เลขประจำตัวผู้เสียภาษี</th>
            <th>ชื่อกิจการ</th>
            <th className="hidden lg:table-cell">สถานะ</th>
            <th className="hidden lg:table-cell">วันที่จดทะเบียนจัดตั้ง</th>
            <th className="hidden lg:table-cell">ทุนจดทะเบียน</th>
            <th className="hidden lg:table-cell">ที่ตั้งสำนักงานใหญ่</th>
            <th className="hidden lg:table-cell">รายชื่อกรรมการ</th>
            <th>งบการเงิน</th>
            <th>กำไร/ขาดทุน</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {data ? (
            data.map((item, idx) => (
              <tr key={item._id}>
                <td>{item.taxid}</td>
                <td>{item.companyName}</td>
                <td className="hidden lg:table-cell">{item.companyStatus}</td>
                <td className="hidden lg:table-cell">
                  {moment(item.registeredDate).format("DD/MM/YYYY")}
                </td>
                <td className="hidden lg:table-cell">
                  {item.registeredCapital}
                </td>
                <td className="hidden lg:table-cell">{item.headLocation}</td>
                <td className="hidden lg:table-cell">
                  <button
                    className="btn btn-xs"
                    onClick={() => handleModalDirector(item.taxid)}
                  >
                    show
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-xs btn-success"
                    onClick={() => handleModalFinanc(item.taxid)}
                  >
                    show
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-xs btn-warning"
                    onClick={() => handleModalIncome(item.taxid)}
                  >
                    show
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <p className="text-center">No, Data..</p>
          )}
        </tbody>
      </table>

      {/* Modal */}
      {director && <TableDirectors handleClose={handleClose} />}
      {financial && <TableFinancial handleClose={handleClose} />}
      {income && <TableIncome handleClose={handleClose} />}
    </div>
  );
}

export default SimpleTable;
