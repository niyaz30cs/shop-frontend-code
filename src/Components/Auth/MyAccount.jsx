import React from "react";

import { useNavigate } from "react-router-dom";

import "../Cart/Dashboard/dashboard.css";


function MyAccount(){
  const navigate = useNavigate();
  const name = localStorage.getItem("name");
  return (
    <div className="account-profile">
      <h1>Hi {name} !!! Welcome to Alibaba.com</h1>
      <h2 className="heading-profile">Profile</h2>
      <div className="userDetails">
        <h2>Name: {name}</h2>
      </div>


      <div className="dashboard-welcome">
        <button onClick={() => navigate("/")} className="dashboard-btn-explr">
          Shoping
        </button>
      </div>
    </div>
  );
};

export default MyAccount;
