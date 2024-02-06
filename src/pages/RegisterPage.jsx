import React, { useState, useEffect } from "react";
import { FiBox } from "react-icons/fi";

function RegisterPage() {
  const [value, setValue] = useState({
    company: "",
    email: "",
    password: "",
    cpassword: "",
  });


  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.password !== value.cpassword) {
      alert("Password not match");
    } else {
      console.log(value);
      alert("Register success!")
    }
  }

  const bg = "bg-[linear-gradient(to_right_bottom,rgba(240,90,104,0.7),rgba(230,19,18,0.8)),url('/src/assets/background/login-bg.jpg')]"

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-slate-100">
      <main className="grid grid-cols-1 lg:grid-cols-2 w-full sm:w-4/5 rounded-2xl bg-white drop-shadow-lg">
        {/* Col 1 */}
        <div className="flex justify-center items-center py-10 bg-white rounded-2xl">
          <div className="text-center w-full text-slate-500">
            <h4 className="uppercase">welcome to</h4>
            <span className="uppercase text-red-500 flex items-center space-x-2 justify-center my-2">
              <FiBox size={24} />
              <h2 className="tracking-wider">Company</h2>
            </span>
            <h4 className="uppercase">register</h4>

            <form className="my-5" onSubmit={handleSubmit}>
              <label className="form-control w-full mx-auto max-w-xs">
                <div className="label">
                  <span className="label-text text-slate-500">
                    Company name
                  </span>
                </div>
                <input
                  required
                  name="company"
                  type="text"
                  placeholder="Company name"
                  className="input w-full input-bordered rounded-full max-w-xs"
                  onChange={handleChange}
                />
              </label>

              <label className="form-control w-full mx-auto max-w-xs">
                <div className="label">
                  <span className="label-text text-slate-500">Email</span>
                </div>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  className="input input-bordered w-full rounded-full max-w-xs"
                  onChange={handleChange}
                />
              </label>

              <label className="form-control w-full mx-auto max-w-xs">
                <div className="label">
                  <span className="label-text text-slate-500">Password</span>
                </div>
                <input
                  required
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  className="input input-bordered w-full rounded-full max-w-xs"
                  onChange={handleChange}
                />
              </label>

              <label className="form-control w-full mx-auto max-w-xs">
                <div className="label">
                  <span className="label-text text-slate-500">
                    Confirm password
                  </span>
                </div>
                <input
                  required
                  name="cpassword"
                  type="password"
                  placeholder="Confirm password"
                  className="input input-bordered w-full rounded-full max-w-xs"
                  onChange={handleChange}
                />
              </label>

              <button
                className="mt-5 btn btn-error text-white w-full rounded-full max-w-xs uppercase"
                type="submit"
              >
                sign up
              </button>
            </form>
          </div>
        </div>

        {/* Col 2 */}
        <div className={`hidden drop-shadow-lg lg:flex justify-center items-center w-full rounded-2xl ${bg}`}>
          <div className="text-center text-white space-y-4 px-24">
            <FiBox size={50} className="mx-auto" />
            <h1 className="tracking-wider uppercase">Company</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              fuga eveniet, ratione, veritatis explicabo placeat voluptatum nam
              reiciendis.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default RegisterPage;
