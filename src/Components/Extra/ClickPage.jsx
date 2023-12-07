import React from "react";
import "../Pages/Responsive.css"
import "./Pages.css";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { add } from "../Redux/cartSlice";
import Box from "../IMG/box.png";
import Brand from "../IMG/brand.png";
import Delevery from "../IMG/delv.png";
import Warenty from "../IMG/warent.png";
import Footer from "./Footer";
import PayPalApis from "../PaymentGet";

function ClickPage(){
  const locate = useLocation().state;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCart = (post) => {
    dispatch(add(post));
  };
  const data = "NameMe";
  return (
    <div className="MinClick">
      <section className="ClickPage" key={data}>
        <div className="clickImage">
          <img src={locate.image} alt="/" />
        </div>
        <div className="midContents">
          <div className="infoContent">
            <h3 className="title">{locate.title}</h3>
            <h4 className="itsPrice">Sale Price: ₹{locate.price}</h4>
            <h5 className="notPrice">Original Price: ₹{locate.crossPrice}</h5>
            <h4 className="fa fa-star checked">{locate.rating}</h4>
          </div>
          <div className="myButtons">
            {/* <button className="CartBtn">Buy Now</button> */}
            <PayPalApis />
            <button className="CartBtn" onClick={() => addToCart(locate)}>
              AddToCart
            </button>
          </div>
          <h4 className="offers">Offers</h4>
          <section className="OfferSection">
            <div className="offCard">
              <h5>No Cost EMI</h5>
              <p>Upto less EMI for New User</p>
            </div>
            <div className="offCard">
              <h5>Banks Offer</h5>
              <p className="paa">
                Every Banks and Ervery credit card and debit card are allowed
                special offers for SBI, ICICI, Axis Bank
              </p>
            </div>
            <div className="offCard">
              <h5>Parent Offer</h5>
              <p className="pa">Get up to 3 months Audible Membership for ₹ 2 *T&C apply</p>
            </div>
          </section>

          <hr className="makeHr" />
          <section className="product">
            <div className="productimg">
              <img src={Box} alt="/" className="pimg" />
              <p>7 Days Replacement</p>
            </div>
            <div className="productimg">
              <img src={Delevery} alt="/" className="pimg" />
              <p>Free Delevery</p>
            </div>
            <div className="productimg">
              <img src={Warenty} alt="/" className="pimg" />
              <p>Warenty Policy</p>
            </div>
            <div className="productimg">
              <img src={Brand} alt="not found" className="pimg" />
              <p>Branded Products</p>
            </div>
          </section>
          <hr className="makeHr" />
          <h4 className="decrp">Description : ..{locate.decriptions}..</h4>
        </div>
      </section>
      <button onClick={()=>{navigate(-1)}} className="cometoHome">Back To Home</button>
      <div className="footermy">
        <Footer />
      </div>

    </div>
  );
};

export default ClickPage;
