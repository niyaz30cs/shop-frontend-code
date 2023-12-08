import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Search() {
    const [data, setData] = useState([])
    const params = useParams()
    const num = params.cat

    useEffect(()=>{
        const api = `https://project-backend-ct05.onrender.com/products/search/${para}`;
        // const api = `https://ecommerce-backend-code.onrender.com/products/search/${para}`;
        axios.get(api)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
      },[num])
  return (
    <div>Search Hi Everyone
        {data.map((value, index)=>(
            <div key={index}>
                <img src={value.image} alt="not found" />    
                <h1>HI</h1>       
            </div>
            
        ))}
    </div>
  )
}

export default Search;