import React,{useState, useEffect} from "react";
import {Link,useNavigate} from 'react-router-dom'
import {doc, setDoc,addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import {getAuth} from 'firebase/auth'
import { collection, getDocs,   } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Update = () => {
    const [username, setUsername] = useState('');
    const [contact, setContact] = useState('');
    const [address, setAddress] = useState('');
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    const userCollecionRef = collection(db, "user");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollecionRef);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //   console.log("Document data:", data);
    };
    getUsers();
  });
    // useEffect(() => {
    //   let authToken = sessionStorage.getItem('auth');
    //   if(authToken){
    //     navigate('/hero')
    //   }if(!authToken){
    //     navigate('/')
    //   }
    // }, [])
  
    const logout = ( ) => {
      sessionStorage.removeItem('auth');
      navigate('/')
    }
  
    const userDetails = (e) => {
      e.preventDefault();
      const auth = getAuth();
      const user = auth.currentUser;
      setDoc(doc(db, "user", user.uid), {
        username,
        contact,
        address
      },setUsername(''),setContact('') , setAddress(''));
      console.log('Data Added');
    }
  return (
    <>
        <div className="hero_bg">
         <div className="container">
          <div className="d-flex justify-content-between mb-4 align-items-center">
          <button className="btn bg-primary text-white" onClick={logout}>Logout</button>
          <Link className="btn bg-primary text-white" to='/details' >View Details</Link>
          </div>
         <div className="d-flex flex-column justify-content-center align-items-center">
         <div
            className="card shadow-lg   py-5 "
            style={{ width: "26rem" }}
            data-aos="zoom-in"
          >
            <h3 className="text-center">Update User</h3>
            <div className="card-body  ">
              {user.map((user) => {
                return <form >
                <div className="input_icons">
                <label>UserName:</label>
                
                <input
                  type="text"className="form-control" value={user.username} onChange={(e) => {setUsername(e.target.value); }}
                  placeholder="Enter your Name" />
                <label className='mt-3'>Contact:</label>
            
                <input type="text" value={user.contact}
                  className="form-control"onChange={(e) => {setContact(e.target.value);}}
                  placeholder="Enter Your Contact"/>
                <label className='mt-3'>Address:</label>
            
                <input type="text" value={user.address}
                  className="form-control"onChange={(e) => {setAddress(e.target.value);}}
                  placeholder="Enter your Address"/>
                <button
                  className="btn bg-primary text-white batn mt-4 w-100"
                  onClick={userDetails}
                >
                  SUBMIT
                </button>
                </div>
              </form>
              })}
              
            </div>
          </div>
         </div>
         </div>
        </div>
    </>
  )
}

export default Update