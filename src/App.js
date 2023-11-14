import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Layout/AuthPage/Login";
import Register from "./Layout/AuthPage/Register";
import Continue from "./Layout/AuthPage/Continue";
import CreateAnAcc from "./Layout/AuthPage/CreateAnAcc";
import ConfirmPassword from "./Layout/AuthPage/ConfirmPassword";
import CheckEmail from "./Layout/AuthPage/CheckEmail";
import ForgotPassword from "./Layout/AuthPage/ForgotPassword";
import Congratulation from "./Layout/AuthPage/Congratulation";
import Main from "./components/Main";
import './App.css'
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/continue" element={<Continue />} />
          <Route path="/registasion" element={<CreateAnAcc />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/confirmPassword" element={<ConfirmPassword />} />
          <Route path="/checkEmail" element={<CheckEmail />} />
          <Route path="/congratulation" element={<Congratulation />} />

          {/* user login qilib kirgandan keyin PrivateRoute bilan profilini ulash kerak! */}
        </Routes>
    </div>
  );
}

export default App;
