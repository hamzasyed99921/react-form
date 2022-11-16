import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Base from "./components/Layouts/Base";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Elements/Hero";
import { ToastContainer, toast } from "react-toastify";
import Details from "./components/Elements/Details";
import Update from "./components/Elements/Update";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="App">
      <ToastContainer/>
        <Base>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/hero" element={<Hero />} />
            <Route path="/details" element={<Details/>} />
            {/* <Route path="/update" element={<Update/>} /> */}
          </Routes>
        </Base>
    </div>
  );
}

export default App;
