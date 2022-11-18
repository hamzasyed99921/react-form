import React, { useState,useEffect } from "react";
import { Link , useNavigate} from "react-router-dom";
import {getAuth,sendPasswordResetEmail} from 'firebase/auth'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    const forgetPassword = (e) => {
        e.preventDefault();
        const auth = getAuth();
       
        sendPasswordResetEmail(auth, email)
          .then((res) => {
            toast("Password reset link sent");
            
          })
          .catch((error) => {
            if (error.code == "auth/missing-email") {
              toast.error("please enter the email");
            }
            if (error.code == "auth/user-not-found") {
              toast.error("Email does not exist!");
            }
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
              <h3 className="text-center">Forgot Password</h3>
              <div className="card-body  ">
                <form >
                  <div className="input_icons">
                  <label>Email:</label>
                  
                  <input
                    type="text"className="form-control" value={email} onChange={(e) => {setEmail(e.target.value); }}
                    placeholder="Enter your Email" />
                  <button
                    className="btn bg-primary text-white batn mt-4 w-100"
                    onClick={forgetPassword}
                  >
                    Sent Link
                  </button>
                  </div>
                </form>
                <div className="text-center botm_link  mt-3">
                Back to!
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

export default ForgotPassword