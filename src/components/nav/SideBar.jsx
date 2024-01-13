import React from "react";

function SideBar() {
  return (
    <aside className="menu bg-base-200 w-56 h-screen sticky top-0 rounded-s-lg flex-col justify-between hidden md:flex shadow-xl">
      <div>
        <div className="px-4 my-10">
          <p className="text-2xl font-bold text-slate-500 cursor-pointer hover:text-primary">LOGO</p>
        </div>
        <ul className="">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>

      <div className="p-5 space-y-2 border-t-2 border-slate-200">
        <div className="flex space-x-2 items-center">
          <div role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-9 rounded-full">
              <img
                alt="profile"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>

          <h4 className="text-lg">Profile</h4>
        </div>

        <div className="text-center">
          <p className="text-primary font-bold cursor-pointer">Logout</p>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
