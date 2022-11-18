import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Update = () => {
  const {id} = useParams();
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  
  const updateUser = (e) => {
    e.preventDefault();
    const docRef = doc(db, "user", id);
    const data = {
      username,
      contact,
      address
    };
    setDoc(docRef , data ,{ merge: true } ).then(() =>{
      toast('Data Updated SuccessFully')
    },setUsername(''),setContact('') , setAddress('')) 
 
  }


  const logout = () => {
    sessionStorage.removeItem("auth");
    navigate("/");
  };
  return (
    <>
      <div className="hero_bg">
        <div className="container">
          <div className="d-flex justify-content-between mb-4 align-items-center">
            <button className="btn bg-primary text-white" onClick={logout}>
              Logout
            </button>
            <Link className="btn bg-primary text-white" to="/details">
              View Details
            </Link>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div
              className="card shadow-lg   py-5 "
              style={{ width: "26rem" }}
              data-aos="zoom-in"
            >
              <h3 className="text-center">Update User</h3>
              <div className="card-body  ">
                <form>
                  <div className="input_icons">
                    <label>UserName:</label>

                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                      placeholder="Enter your Name"
                    />
                    <label className="mt-3">Contact:</label>

                    <input
                      type="text"
                      value={contact}
                      className="form-control"
                      onChange={(e) => {
                        setContact(e.target.value);
                      }}
                      placeholder="Enter Your Contact"
                    />
                    <label className="mt-3">Address:</label>

                    <input
                      type="text"
                      value={address}
                      className="form-control"
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                      placeholder="Enter your Address"
                    />
                    <button
                      className="btn bg-primary text-white batn mt-4 w-100"
                      onClick={updateUser}
                    >
                      UPDATE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Update;
