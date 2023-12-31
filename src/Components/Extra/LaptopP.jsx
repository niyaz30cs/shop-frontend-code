import axios from "axios";
import React, { useEffect, useState } from "react";
import AddToCart from "../Cart/AddToCart";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function LaptopP() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
    .get("https://project-backend-ct05.onrender.com/products/fetchbysubcat/lap")
    // .get("https://ecommerce-backend-code.onrender.com/products/fetchbysubcat/lap")
      .then((res) => {
        setData(res.data.result);
      });
  });

  return (
    <div>
      <div className="oHome">
        <div className="omeData">
          {data.slice(0, 8).map((item, index) => {
            return (
              <div key={index} className="RomeBox">
                <img src={item.image} alt="not found" className="homeimg" />
                <div className="RemidCard">
                  <Link to={`/ClickPage/${item.title2}`} state={item}>
                    <h3 className="homeText">{item.title2}</h3>
                  </Link>
                  <h4 className="itsPrice">Sale Price: {item.price}</h4>
                  <h5 className="notPrice">Original Price: {item.crossPrice}</h5>
                  <h4 className="fa fa-star checked"></h4>
                  <h4 className="fa fa-star checked">{item.rating}</h4>
                </div>
                <AddToCart item={item} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="Allfooter">
        <Footer />
      </div>
    </div>
  );
}

export default LaptopP;
