import React, { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleFun = (event) => {
    event.preventDefault();
    const data = {user, pass};
    console.log(data);
  };
  return (
    <>
      <div className="bg_color">
      <div className="container " style={{ height: "100%",paddingBottom: '120px' }}>
        <div className="login_form d-flex  justify-content-center py-5">
          <div
            className="card shadow-lg align-items-center  py-5 "
            style={{ width: "24rem" }}
          >
            <h3>Login</h3>
            <div className="card-body py-3 ">
              <form onSubmit={handleFun}>
                <label>Username:</label>
                <input
                  type="text"
                  className="form-control"
                  value={user}
                  onChange={(e) => {
                    setUser(e.target.value);
                  }}
                  placeholder="Enter your username"
                />
                <label className='mt-3'>Password:</label>
                <input
                  type="password"
                  value={pass}
                  className="form-control"
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                  placeholder="Enter Password"
                />
                <button
                  type="submit"
                  className="btn bg-primary text-white batn mt-3 w-100"
                >
                  LOGIN
                </button>
              </form>
              <div className="text-center mt-3">
                <Link to="/signup" className="">
                  Create account!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Login;
