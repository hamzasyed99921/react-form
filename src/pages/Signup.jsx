import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import {app} from '../firebase'
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signUpUser = (e) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      sessionStorage.setItem("auth", res._tokenResponse.refreshToken);
      navigate('/hero')
      toast('LogIn SuccessFully!')
    }).catch((error) => {
      if (error.code == "auth/wrong-password") {
        toast.error("please check the password");
      }
      if (error.code == "auth/user-not-found") {
        toast.error("please check the email");
      }
    })
  }

  return (
    <>
      <div className="bg_color">
        <div className="container " style={{ height: "100%" }}>
          <div className="login_form d-flex  justify-content-center py-5">
            <div
              className="card px-2 py-5 "
              style={{ width: "26rem" }}
              data-aos="zoom-in"
            >
              <h3 className="text-center">Sign Up</h3>
              <div className="card-body py-3 ">
                <form>
                  <label>Email:</label>
                  <input
                    type="text"
                    value={email}
                    className="form-control shadow-lg"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="Enter your Email"
                  />

                  <label className="mt-3">Password:</label>
                  <input
                    type="password"
                    value={password}
                    className="form-control shadow-lg"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    placeholder="Enter Password"
                  />
                  <button
                    className="btn bg-primary text-white mt-3 batn w-100"
                    onClick={signUpUser}
                  >
                    SIGNUP
                  </button>
                </form>
                <div className="text-center botm_link mt-4">
                  Already have an account!
                  <Link to="/" className="">
                    Login here
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

export default Signup;
