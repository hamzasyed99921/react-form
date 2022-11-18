import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import { toast } from "react-toastify";

const Details = () => {
  const [user, setUser] = useState([]);
  const auth = getAuth();
  const id = auth.currentUser;
    // console.log(id.uid);
  const userCollectionRef = collection(db, "user");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      // console.log("Document data:", data);
    };
    getUsers();
  });

  const deleteUser = (id) => {
    // console.log(id);
    deleteDoc(doc(db, "user", id));
    toast('Data Deleted!')
  };
  return (

    <>
      <div>
        <div className="container mt-5">
          <Link className="btn bg-primary text-white" to="/hero">
            Back
          </Link>
          <div className="d-flex justify-content-center align-items-center">
            <table className="table w-75">
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Address</th>
                  <th scope="col">Delete</th>
                  <th scope="col">Edit</th>
                </tr>
              </thead>
              <tbody>
                {user.length ? (
                  user.map((user, id) => {
                    return (
                      <>
                        <tr>
                          <th scope="row">{id + 1}</th>
                          <td>{user.username}</td>
                          <td>{user.contact}</td>
                          <td>{user.address}</td>
                          <td>
                            <button
                              className="btn bg-danger text-white"
                              onClick={() => {
                                deleteUser(user.id);
                              }}
                            >
                              Delete
                            </button>
                          </td>
                          <td><Link className="btn bg-secondary text-white" to={`/update/${user.id}`}>Edit</Link></td>
                        </tr>
                      </>
                    );
                  })
                ) : (
                  <h3>Data Not Found</h3>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
