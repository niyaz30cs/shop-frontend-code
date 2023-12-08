import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./dashboard.css"

function Dashboard() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  // const url = `https://ecommerce-backend-code.onrender.com/order/orderuserdetail/${userId}`;
  const url = `https://project-backend-ct05.onrender.com/order/orderuserdetail/${userId}`;
  const name = localStorage.getItem("name");

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res.data.result))
      .catch((err) => console.log(err, "error from DashBoard"));
  }, [url]);

  console.log(data);

  return (
    <div>
      <div className="ecom_cntnr">
        <div className="dashboard-cntnr">
          <div className="dashboard-Subcntnr">
            <div className="dashboard-left-boxes">
              {data?.map((orderDetail) => {
                return (
                  <div key={orderDetail._id} className="dashboard-left-box">
                    <div className="dashboard-time">
                      <div className="order-details">Your Orders:</div>
                      <Link to="/myorders">My Orders</Link>
                      <div>
                        <div>
                          <span className="date-dash">Date: </span>
                          {orderDetail.orderDate}
                        </div>
                        <div>
                          <span className="date-dash">Time: </span>
                          {orderDetail.orderTime}
                        </div>
                      </div>
                    </div>

                    <div className="dashboard-order-detail">
                      {orderDetail.cartItems.map((item) => {
                        return (
                          <div key={item.ide} className="dashboard-content">
                            <img src={item.image} alt={item.title} />

                            <div className="dashboard-product-description">
                              <div className="dashboard-title">
                                {item.title}
                              </div>
                              <div className="dashboard-price">
                                <div>
                                  <span>Quantity:</span>
                                  {item.cartQuantity}
                                </div>
                                <div>
                                  <span>Price:</span>₹ {item.price}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="dashboard-right-box">
              <div className="dashboard-welcome">
                <div>{name} !! Welcome to Alibaba.com</div>
                <button
                  onClick={() => navigate("/")}
                  className="dashboard-btn-explr"
                >
                  Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
