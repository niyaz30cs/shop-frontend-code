import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Extra/Footer";
import axios from "axios";

function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseData, setResponseData] = useState(null);
  const navigate = useNavigate();

  const emailHandler = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const loginUser = async (userData) => {
    const api = "https://ecommerce-backend-code.onrender.com/userdata/login";
    const response = await axios.post(api, userData);
    setResponseData(response.data);

    if (response.data.token) {
      console.log(responseData);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("name", response.data.userData.name);
      localStorage.setItem("userId", response.data.userData._id);

      navigate("/");
    } 
    else 
    {
      window.alert("invalide Credential");
      navigate("/register");
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    setEmail("");
    setPassword("");
    loginUser(userData);
  };

  return (
    <>
      <div className="body">
        <div className="box">
          <span className="borderline"></span>
          <form>
            <h2>*Login*</h2>
            <div className="inputBox">
              <input type="text" name="user-name" required="required" onChange={emailHandler} value={email} />
              <span>Email</span>
              <i></i>
            </div>

            <div className="inputBox">
              <input type="password" name="user-password" required="required" onChange={passwordHandler} value={password} />
              <span>Password</span>
              <i></i>
            </div>

            <div className="links">
              <Link to="/forget">Forget Password</Link>
              <Link to="/register">Register</Link>
            </div>
            <button type="submit" value="login" onClick={submitHandler}>Login</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
