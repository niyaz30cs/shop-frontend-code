import React, { useState } from "react";
import "./profile.css";

import { toast } from "react-toastify";

import { NavLink } from "react-router-dom";

function Profile(){
  const name = localStorage.getItem("name");
  const [show, setShow] = useState(localStorage.getItem("loggedIn"));
  const [click, setClick] = useState(false)

  console.log(show);

  const handleLogout = () => {
    localStorage.clear();
    setShow(!show);
    toast.info("Logout successfully", { position: toast.POSITION.TOP_RIGHT });
  };


  const handleClick =()=>{
    setClick(!click)
  }

  const RenderProfile = () => {
    if(show){
        return (
          <div className='user-profile'>
             <ul>
             <li><NavLink to="/dash" className="lgbtn"> Hi {name}</NavLink></li>
              <li><NavLink to="/login" className="lgbtn" onClick={handleLogout} >Logout</NavLink>  </li>
            </ul>
      
          </div>
        )
      }
      else{
        return(
          <div className='user-profile'>
            <ul>
            <li><NavLink to="/register" className="register" >Register</NavLink></li>
            <li><NavLink to="/login" className="login">Login</NavLink></li>
            </ul>
          </div>
        )
      }
  
  }

  return (
    <>
      <RenderProfile />
    </>
  );

};

export default Profile;
