import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Private = (props) => {
    const {Components} = props;
    const navi = useNavigate();

    useEffect(()=>{
        let login = localStorage.getItem("loggedIn")
        if(!login){
            navi("/login")
        }
    })
  return (
    <div>
      <Components />
    </div>
  )
}

export default Private
