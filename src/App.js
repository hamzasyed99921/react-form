import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Base from './components/Layouts/Base';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Base>
        <Routes>
          <Route index path="/" element={<Home/>} />
          <Route  path="/login" element={<Login/>} />
          <Route  path="/signup" element={<Signup/>} />
        </Routes>
      </Base>
    </BrowserRouter>
    </div>
  );
}

export default App;
