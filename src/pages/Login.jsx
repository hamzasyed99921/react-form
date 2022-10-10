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
            className="card shadow-lg   py-5 "
            style={{ width: "26rem" }}
          >
            <h3 className="text-center">Login</h3>
            <div className="card-body  ">
              <form onSubmit={handleFun}>
                <div className="input_icons">
                <label>Username:</label>
                
                <input
                  type="text"className="form-control" value={user} onChange={(e) => {setUser(e.target.value); }}
                  placeholder="Enter your username" />
                <label className='mt-3'>Password:</label>
            
                <input type="password" value={pass}
                  className="form-control"onChange={(e) => {setPass(e.target.value);}}
                  placeholder="Enter Password"/>
                <button
                  type="submit"
                  className="btn bg-primary text-white batn mt-5 w-100"
                >
                  LOGIN
                </button>
                </div>
              </form>
              <div className="text-center botm_link  mt-3">
              Create account!
                <Link to="/signup" className="">
                  SignUp
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
