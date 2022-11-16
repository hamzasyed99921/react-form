import React, { useState,useEffect } from "react";
import { Link , useNavigate} from "react-router-dom";
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInUser = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then((res) => {
      sessionStorage.setItem("auth", res._tokenResponse.refreshToken);
      navigate('/hero');
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
  useEffect(() => {
    let authToken = sessionStorage.getItem('auth');
    if(authToken){
      navigate('/hero')
    }if(!authToken){
      navigate('/')
    }
  }, [])
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
            <h3 className="text-center">Login</h3>
            <div className="card-body  ">
              <form >
                <div className="input_icons">
                <label>Email:</label>
                
                <input
                  type="text"className="form-control" value={email} onChange={(e) => {setEmail(e.target.value); }}
                  placeholder="Enter your Email" />
                <label className='mt-3'>Password:</label>
            
                <input type="password" value={password}
                  className="form-control"onChange={(e) => {setPassword(e.target.value);}}
                  placeholder="Enter Password"/>
                <button
                  className="btn bg-primary text-white batn mt-4 w-100"
                  onClick={signInUser}
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
