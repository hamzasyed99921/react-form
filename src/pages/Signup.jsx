import React, {useState} from 'react'
import { Link } from "react-router-dom";
const Signup = () => {

    const [user, setUser] = useState('');
    const [contact, setContact] = useState('');
    const [pass, setPass] = useState('');
    const [cpass, setCpass] = useState('');
    
      const handleSubmit = (event) => {
        event.preventDefault();
        const data = {user,contact,pass,cpass};
        console.log(data);
    }
  return (
    <>
        <div className="bg_color">
        <div className="container " style={{height: '100%'}}>
      <div className="login_form d-flex  justify-content-center py-5">
      <div className="card px-2 py-5 " style={{ width: "26rem" }}>
        <h3 className='text-center'>Sign Up</h3>
        <div className="card-body py-3 ">
          <form onSubmit={handleSubmit}>
          <label >Username:</label>
          <input type="text" value={user} className="form-control shadow-lg" onChange={(e) => {setUser(e.target.value)}} placeholder="Enter your username"/>
          <label className='mt-3'>Contact No:</label>
          <input type="text" value={contact} className="form-control shadow-lg" onChange={(e) => {setContact(e.target.value)}} placeholder="Enter your contact number"/>
          <label className='mt-3'>Password:</label>
          <input type="password" value={pass} className="form-control shadow-lg" onChange={(e) => {setPass(e.target.value)}} placeholder="Enter Password"/>
          <label className='mt-3'>Confirm Password:</label>
          <input type="password" value={cpass} className="form-control shadow-lg" onChange={(e) => {setCpass(e.target.value)}} placeholder="Enter Password"/>
          <button type='submit' className="btn bg-primary text-white mt-3 batn w-100">SIGNUP</button>
          </form>
          <div className="text-center mt-3">
          
          <Link to="/login" className="">Already have an account!</Link>
          </div>
        </div>
      </div>
      </div>
    </div>
        </div>
    </>
  )
}

export default Signup