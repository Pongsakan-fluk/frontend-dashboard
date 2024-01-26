import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import axios from "axios";


function TableDirectors({ handleClose }) {
  const [data, setData] = useState();

  let { taxid } = useParams();

  const fetchData = () => {
    axios
      .get(`https://piya-cloud.onrender.com/api/dbd/companyData/${taxid}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  useEffect(() => {
    fetchData();
  }, [taxid]);

  return (
    <div className="modal modal-open">
      <div className="modal-box text-center text-black">
        <button
          onClick={handleClose}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>
        <h2 className="text-slate-600">รายชื่อกรรมการ</h2>
        <div className="overflow-x-auto mt-5">
        <table className="table table-zebra table-pin-rows">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.directors.map((item, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{item.directorName}</td>
                </tr>
              ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}

export default TableDirectors;
