import React, { useState,useEffect } from "react";
import { Link , useNavigate,useSearchParams} from "react-router-dom";
import {getAuth,confirmPasswordReset} from 'firebase/auth'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setquery] = useState((searchParams.get('oobCode')));
    const [newPassword, setNewPassword] = useState("");

    const ResetPassword = (e) => {
        e.preventDefault();
        const auth = getAuth();
        // console.log(auth);
        confirmPasswordReset(auth, query, newPassword)
        .then((res) => {
            toast("Password Updated");
          },setNewPassword(''))
          .catch((error) => {
            console.log(error);
          });
      };

    return (
      <>
        <div className="bg_color">
        <div className="container " style={{ height: "100%",paddingBottom: '120px' }}>
          <div className="login_form d-flex  justify-content-center py-5">
            <div
              className="card shadow-lg   py-5 "
              style={{ width: "26rem" }}
              data-aos="zoom-in"
            >
              <h3 className="text-center">Reset Password</h3>
              <div className="card-body  ">
                <form >
                  <div className="input_icons">
                  <label className='mt-3'>Password:</label>
                  <input type="password" value={newPassword}
                    className="form-control"onChange={(e) => {setNewPassword(e.target.value);}}
                    placeholder="Enter New Password"/>
                  <button
                    className="btn bg-primary text-white batn mt-4 w-100"
                    onClick={ResetPassword}
                  >
                    Reset Password
                  </button>
                  </div>
                </form>
                <div className="text-center botm_link  mt-3">
                Back to
                  <Link to="/" className="">
                    Login
                  </Link>
                </div>
               
              </div>
            </div>
          </div>
        </div>
        </div>
      </>
    );
}

export default ResetPassword