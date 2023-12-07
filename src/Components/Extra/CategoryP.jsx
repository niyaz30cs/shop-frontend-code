import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AddToCart from "../Cart/AddToCart";
import Footer from "./Footer";

function CategoryP(){
  const [data, setData] = useState([]);

  const params = useParams();
  const para = params.cat;

  useEffect(() => {
    axios.get(`https://ecommerce-backend-code.onrender.com/products/fetchbycart/${para}`)
      .then((res) => {
        setData(res.data.result);
      });
  }, [params, para]);

  return (
    <div>
      <div className="oHome">
        {" "}
        <h3 className="star">Store Page</h3>
        <div className="omeData">
          {data.slice(0, 8).map((post) => {
            const { title2, image, price, crossPrice, rating } = post;
            return (
              <div className="RomeBox">
                <img src={image} alt="not found" className="homeimg" />
                <div className="RemidCard">
                  <Link to={`/ClickPage/${title2}`} state={post}>
                    <h3 className="homeText">{title2}</h3>
                  </Link>
                  <h4 className="itsPrice">Sale Price: {price}</h4>
                  <h5 className="notPrice">Original Price: {crossPrice}</h5>
                  <h4 className="fa fa-star checked"></h4>
                  <h4 className="fa fa-star checked">{rating}</h4>
                </div>
                {/* <button className="addToCart" onClick={() => addToCart(post)}>
                  AddToCart
                </button> */}
                <AddToCart item={post} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CategoryP;
