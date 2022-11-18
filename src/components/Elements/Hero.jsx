import React,{useState, useEffect} from "react";
import {Link,useNavigate} from 'react-router-dom'
import {doc, setDoc,addDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import {ref, uploadBytes, getStorage,uploadBytesResumable,getDownloadURL } from "firebase/storage";
import {getAuth} from 'firebase/auth'
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {FaCamera} from 'react-icons/fa'



const Hero = () => {

  const [username, setUsername] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [ImageUpload, setImageUpload] = useState(null);
  const navigate = useNavigate();
  const [fileUrl, setFileUrl] = useState(null);
const [progress, setprogress] = useState(0);



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
    //  if(ImageUpload == null) return;
    // // const file = new Date().setTime() + ImageUpload.name; 
    // const imageRef  = ref(storage, ImageUpload.name);
    // uploadBytes(imageRef , ImageUpload).then(() => {
    //   // alert('images upload')
    // }, setImageUpload(null))
    
    const storage = getStorage();

// Create the file metadata
// /** @type {any} */
// const metadata = {
//   contentType: 'image/jpeg'
// };

// Upload file and metadata to the object 'images/mountains.jpg'
const storageRef = ref(storage, 'images/' + fileUrl.name);
const uploadTask = uploadBytesResumable(storageRef, fileUrl);

// Listen for state changes, errors, and completion of the upload.
uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        break;


      case 'storage/unknown':
        break;
    }
  }, 
  () => {
    // Upload completed successfully, now we can get the download URL
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
    });
  }
);

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
                  {/* <label className='mt-3'>Upload File:</label>
                <input type="file" 
                  className="form-control"onChange={(e) => {setImageUpload(e.target.files[0]);}} /> */}
                    <label>
                {progress < 1 ? (
                  <>
                    <input
                      type='file'
                      id='input-file'
                      className='form-control '
                      onChange={(e) => {setFileUrl(e.target.files[0])}}
                    />
                    <FaCamera size={30} /> <br />
                    <progress value={progress} max='100' />
                  </>
                ) : (
                  <img src={fileUrl} alt='...' />
                )}
              </label>
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
