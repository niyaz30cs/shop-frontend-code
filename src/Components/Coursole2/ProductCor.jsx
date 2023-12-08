import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AddToCart from "../Cart/AddToCart";
// import { useDispatch } from "react-redux";
// import { add } from "../Redux/cartSlice";
import "./ProductCor.css"
import { Link } from "react-router-dom";

function ProductCor() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
    .get("https://project-backend-ct05.onrender.com/products/fetchdata")

      .then((res) => {
        setData(res.data.result);
      });
  });

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="ProCoursole">
      <h2 className="head" id="head">
        Trending Products
      </h2>
      <Carousel responsive={responsive}>
        {data.slice(10, 35).map((post, index) => (
          <div key={index} className="SlidCard">
            <div className="proCard">
              <img src={post.image} alt="not found" />
              <Link to={`/ClickPage/${post.title2}`} state={post}>
                    <h3 className="homeText">{post.title2}</h3>
                  </Link>
                <p className="price">₹{post.crossPrice}</p>
                {/* <button className="addToCart" onClick={() => addToCart(post)}>
                  AddToCart
                </button> */}
                <AddToCart item={post} />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ProductCor;
