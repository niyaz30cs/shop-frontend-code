import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  add,
  clearCart,
  decreaseCart,
  getTotal,
  orderPlaced,
  removeFromCart,
} from "../Redux/cartSlice";
import axios from "axios";
import "./cart.css";
import cartImage from "../IMG/emptycart.jpg";
import PayPalApis from "../PaymentGet";
import Footer from "../Extra/Footer";

function Cart(){
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const navi = useNavigate();

  const productCount = cart.cartItems.length;

  useEffect(() => {
    dispatch(getTotal());
  });

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleAdd = (item) => {
    dispatch(add(item));
  };

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleLess = (item) => {
    dispatch(decreaseCart(item));
  };

  const handleBuy = () => {
    const url = "https://ecommerce-backend-code.onrender.com/order/addorder";
    console.log("order placed");

    axios.post(url, cart);
    dispatch(orderPlaced());
  };

  return (
    <div>
      <div className="ecom_cntnr">
        {productCount === 0 ? (
          <div className="empty_cart_disp">
            <img src={cartImage} alt="not found" />
            <div className="empty_cart_text_right">
              <h3>Hey, it feels so light!</h3>
              <p>There's No Item in your cart. Let's add some items.</p>

              <button className="explore_btn" onClick={() => navi("/")}>
                Explore
              </button>
            </div>
          </div>
        ) : (
          <div className="cart_container">
            <h2>Cart</h2>
            <div className="titles">
              <h3 className="product-title">Product</h3>
              <h3 className="product-Price">Price</h3>
              <h3 className="product-Quantity">Quantity</h3>
              <h3 className="total">Total</h3>
            </div>
            <div className="cart-items">
              {cart.cartItems?.map((cartItem) => {
                return (
                  <div className="cart-item" key={cartItem.ide}>
                    <div className="cart-product">
                      <img src={cartItem.image} alt={cartItem.name} />
                      <div>
                        <h3>{cartItem.p_name}</h3>
                        <p>{cartItem.title}</p>
                        <button onClick={() => handleRemove(cartItem)}>
                          <i class="fa-solid fa-xmark" id="remove"></i>
                        </button>
                      </div>
                    </div>
                    <div className="cart-product-price">₹ {cartItem.price}</div>
                    <div className="cart-product-quantity">
                      <button
                        className="addbtn"
                        onClick={() => handleLess(cartItem)}
                      >
                        -
                      </button>
                      <div className="count">{cartItem.cartQuantity}</div>
                      <button
                        className="addbtn"
                        onClick={() => handleAdd(cartItem)}
                      >
                        +
                      </button>
                    </div>
                    <div className="cart-product-total-price">
                      ₹ {cartItem.price * cartItem.cartQuantity}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="cart-summary">
              <button onClick={handleClearCart} className="clear-cart">
                Clear Cart
              </button>
              <div className="cart-checkout">
                <div className="sub-total">
                  <span>Sub total</span>
                  <span className="amount">₹ {cart.cartTotalAmount}</span>
              
                  <PayPalApis />
                  
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
