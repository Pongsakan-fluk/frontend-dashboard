import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar flex justify-between bg-white  md:hidden">
      <div className="">
        <Link to="/" className="btn btn-ghost text-xl">LOGO</Link>
      </div>
      <div className="">

        {/* Profile */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-9 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-48"
          >
            <li>
              <a className="justify-between">
                Profile
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li className="text-error">
              <a>Logout</a>
            </li>
          </ul>
        </div>

        {/* Humberger */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <FiMenu size={30} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm absolute right-0 dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/manage-employee">Manage Employee</Link>
            </li>
            <li>
              <Link to="/manage-product">Manage Product</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
