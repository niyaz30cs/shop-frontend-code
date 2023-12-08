import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Pages.css";
import "react-toastify/dist/ReactToastify.css";
import AddToCart from "../Cart/AddToCart";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Sheeping from "../Sheepping/Sheep";
import HomVid from "../Sheepping/HomVid";
import ProductCor from "../Coursole2/ProductCor";

function All() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // const api = `https://ecommerce-backend-code.onrender.com/products/fetchdata`;
    const api = `https://project-backend-ct05.onrender.com/products/fetchdata`;

    axios.get(api).then((res) => setData(res.data.result))
         .catch((err) => console.log(err));
  }, []);

  return (
    <div className="myHome">
      <h2 className="head" id="head">Best Offer</h2>
      <hr className="head" />
      <div className="HomeData">
        {data.filter((item) => item.comp === "total").map((item, index) => (
          <div key={index} className="RomeBox">
            <img src={item.image} alt="/" className="homeimg" />
            <div className="RemidCard">
              <Link to={`/ClickPage/${item.title2}`} state={item}>
                <h3 className="homeText">{item.title2}</h3>
              </Link>
              <h4 className="itsPrice">Sale Price:{item.price}</h4>
              <h4 className="notPrice">Original Price:{item.crossPrice}</h4>
              <h4 className="fa fa-star checked"></h4>
              <h4 className="fa fa-star checked">{item.rating}</h4>
            </div>
            <AddToCart item={item} />
          </div>
        ))}
      </div>
      <HomVid />
      <ProductCor />
      <Sheeping />
      <div className="Allfooter ReFooter">
        <Footer />
      </div>
    </div>
  );
}

export default All;
