import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//functions
import { readCompanyData } from "../../functions/companyData";


function TableDirectors({ handleClose }) {
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
    <div className="modal modal-open overflow-scroll">
      <div className="modal-box text-center text-black">
        <button
          onClick={handleClose}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>
        <h2 className="text-slate-600">รายชื่อกรรมการ</h2>

        {loading ? (
          <span className="loading loading-bars text-primary w-1/5 inset-x-1/3 inset-y-1/3 z-10"></span>
        ) : (
          <div className="overflow-x-auto mt-5">
            <table className="table table-zebra table-pin-rows text-center">
              <thead>
                <tr>
                  <th>ลำดับที่</th>
                  <th>ชื่อ</th>
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
        )}
      </div>
    </div>
  );
}

export default TableDirectors;
