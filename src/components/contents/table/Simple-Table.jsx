import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import TableDirectors from "../../modals/TableDirectors";
import TableFinancial from "../../modals/TableFinancial";
import TableIncome from "../../modals/TableIncome";

function SimpleTable() {
  const [data, setData] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [listPage, setListPage] = useState();
  const [loading, setLoading] = useState(false);

  //for modal
  const [director, setDirector] = useState(false);
  const [financial, setFinancial] = useState(false);
  const [income, setIncome] = useState(false);

  const navigate = useNavigate();

  const fetchData = () => {
    setLoading(true);

    axios
      .get(
        `https://piya-cloud.onrender.com/api/dbd/companyData/${activePage}/10`
      )
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
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

  const nextPage = () => {
    if (activePage == 189) {
      setActivePage(parseInt(activePage))
    } else {
      setActivePage(parseInt(activePage) + 1)
    }
  }

  const prevPage = () => {
    if (activePage == 1) {
      setActivePage(parseInt(activePage))
    } else {
      setActivePage(parseInt(activePage) - 1)
    }
  }


  useEffect(() => {
    fetchData();
    DropdownPage();
  }, [activePage]);

  return (
    <div className="overflow-x-auto min-h-96 bg-white border-t-4 border-indigo-500 rounded-lg drop-shadow-lg">

      {/* Head */}
      <div className="my-5 flex justify-between items-center mx-5">
        <p>Table</p>
        <div className="join">
          <button
            className="join-item btn btn-xs"
            onClick={prevPage}
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
            onClick={nextPage}
          >
            »
          </button>
        </div>
      </div>
      <hr />

      {/* Table */}
      <table
        className={`table table-zebra table-xs`}
      >
        <thead className="text-center">
          <tr>
            <th className="hidden sm:table-cell">เลขประจำตัวผู้เสียภาษี</th>
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
                <td className="hidden sm:table-cell">{item.taxid}</td>
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
      {/* Loading */}
      {loading && <span className="loading loading-bars text-primary w-1/4 absolute inset-y-1/3 inset-x-1/3 z-10"></span>}
    </div>
  );
}

export default SimpleTable;
