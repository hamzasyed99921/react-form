import React,{useState, useEffect} from "react";
import {Link,useNavigate} from 'react-router-dom'
import {doc, setDoc,addDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import {ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {getAuth} from 'firebase/auth'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {v4} from 'uuid'


const Hero = () => {

  const [username, setUsername] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [ImageUpload, setImageUpload] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem('auth');
    if(authToken){
      navigate('/hero')
    }if(!authToken){
      navigate('/')
    }
  }, [])

  const logout = ( ) => {
    sessionStorage.removeItem('auth');
    navigate('/')
    toast('LogOut SuccessFully!')
  }

  const userDetails = (e) => {
    e.preventDefault();
    const auth = getAuth();
    const user = auth.currentUser;
    console.log(user.uid);
    setDoc(doc(db, "user", user.uid), {
      username,
      contact,
      address
    },setUsername(''),setContact('') , setAddress(''));
    toast('Data Added SuccessFully')
     if(ImageUpload == null) return;
    const file = new Date().setTime() + ImageUpload.name;
    const imageRef  = ref(storage, file);
    uploadBytes(imageRef , ImageUpload).then(() => {
      // alert('images upload')
    }, setImageUpload(null))
    

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
            <h3 className="text-center">User Details</h3>
            <div className="card-body  ">
              <form >
                <div className="input_icons">
                <label>UserName:</label>
                
                <input
                  type="text"className="form-control" value={username} onChange={(e) => {setUsername(e.target.value); }}
                  placeholder="Enter your Name" />
                <label className='mt-3'>Contact:</label>
            
                <input type="text" value={contact}
                  className="form-control"onChange={(e) => {setContact(e.target.value);}}
                  placeholder="Enter Your Contact"/>
                <label className='mt-3'>Address:</label>
            
                <input type="text" value={address}
                  className="form-control"onChange={(e) => {setAddress(e.target.value);}}
                  placeholder="Enter your Address"/>
                  <label className='mt-3'>Upload File:</label>
                <input type="file" 
                  className="form-control"onChange={(e) => {setImageUpload(e.target.files[0]);}} />
                <button
                  className="btn bg-primary text-white batn mt-4 w-100"
                  onClick={userDetails}
                >
                  Add Details
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

export default Hero;
