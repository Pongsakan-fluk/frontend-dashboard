import React from "react";
import { FiTrash2 } from "react-icons/fi";

function SimpleTable() {
  return (
    <div className="overflow-x-auto bg-white border-t-4 border-indigo-500 rounded-lg drop-shadow-lg">
      <div className="my-5 flex justify-between items-center mx-5">
        <h3>Table</h3>
        <div className="join">
          <button className="join-item btn btn-xs">1</button>
          <button className="join-item btn btn-xs btn-active">2</button>
          <button className="join-item btn btn-xs">3</button>
          <button className="join-item btn btn-xs">4</button>
        </div>
      </div>
      <hr />

      <table className="table table-zebra">
        {/* head */}
        <thead className="text-center">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Job</th>
            <th>Progress</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>
              <progress
                className="progress progress-primary"
                value="32"
                max="100"
              ></progress>
            </td>
            <td>
              <FiTrash2 size={20} className="text-error mx-auto" />
            </td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>
              <progress
                className="progress progress-warning"
                value="50"
                max="100"
              ></progress>
            </td>
            <td>
              <FiTrash2 size={20} className="text-error mx-auto" />
            </td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>
              <progress
                className="progress progress-error"
                value="72"
                max="100"
              ></progress>
            </td>
            <td>
              <FiTrash2 size={20} className="text-error mx-auto" />
            </td>
          </tr>
          {/* row 4 */}
          <tr>
            <th>4</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>
              <progress
                className="progress progress-info"
                value="22"
                max="100"
              ></progress>
            </td>
            <td>
              <FiTrash2 size={20} className="text-error mx-auto" />
            </td>
          </tr>
          {/* row 5 */}
          <tr>
            <th>5</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>
              <progress
                className="progress progress-success"
                value="92"
                max="100"
              ></progress>
            </td>
            <td>
              <FiTrash2 size={20} className="text-error mx-auto" />
            </td>
          </tr>
          {/* row 6 */}
          <tr>
            <th>6</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>
              <progress
                className="progress progress-success"
                value="92"
                max="100"
              ></progress>
            </td>
            <td>
              <FiTrash2 size={20} className="text-error mx-auto" />
            </td>
          </tr>
          {/* row 7 */}
          <tr>
            <th>7</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>
              <progress
                className="progress progress-success"
                value="92"
                max="100"
              ></progress>
            </td>
            <td>
              <FiTrash2 size={20} className="text-error mx-auto" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SimpleTable;
