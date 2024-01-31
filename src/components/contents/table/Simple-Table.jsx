import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import moment from "moment";
//functions
import { listCompanyData } from "../../../functions/companyData";
//redux
import { useSelector, useDispatch } from 'react-redux'
import { openDirector, openFinancial, openIncome } from "../../../store/ModalSlice";

function SimpleTable() {
  const [data, setData] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [listPage, setListPage] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  let location = useLocation();
  const dispatch = useDispatch()

  const fetchData = () => {
    setLoading(true);

    listCompanyData(activePage)
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

  const dropdownPage = () => {
    const result = [];
    for (let i = 1; i <= 189; i++) {
      result.push(i);
    }
    setListPage(result);
  };

  const handleModalDirector = (taxid) => {
    navigate(`${location.pathname == "/" ? `${location.pathname}${taxid}` : `${location.pathname}/${taxid}`}`);
    dispatch(openDirector())
  };

  const handleModalFinanc = (taxid) => {
    navigate(`${location.pathname == "/" ? `${location.pathname}${taxid}` : `${location.pathname}/${taxid}`}`);
    dispatch(openFinancial())
  };

  const handleModalIncome = (taxid) => {
    navigate(`${location.pathname == "/" ? `${location.pathname}${taxid}` : `${location.pathname}/${taxid}`}`);
    dispatch(openIncome())
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
    dropdownPage();
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

      {/* Loading */}
      {loading && <span className="loading loading-bars text-primary w-1/4 absolute inset-y-1/3 inset-x-1/3 z-10"></span>}
    </div>
  );
}

export default SimpleTable;
