import { PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import { useSelector } from "react-redux";

export default function PayPalApis() {
  const { cartItems, userId } = useSelector((state) => state.cart);
  //   console.log(select);
  const createOrder = async (data) => {
    // Order is created on the server and the order id is returned
    try {
      const { data } = await axios.post(
        "https://ecommerce-backend-code.onrender.com/products/api/orders",
        { cart: cartItems, userId: userId },
        {
          // method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // use the "body" param to optionally pass additional order information
          // like product skus and quantities
          // body: JSON.stringify({
          //     cart: {
          //         description: "toy",
          //         cost: "200",

          //         //"YOUR_PRODUCT_STOCK_KEEPING_UNIT",
          //         sku: "products._id",
          //         // "YOUR_PRODUCT_QUANTITY",
          //         quantity: "1",
          //     },

          // }),
        }
      );

      // .then((response) => response.json())
      // .then((order) => order.id);
      const orderData = data.data;
      if (orderData.id) {
        // console.log("order id-", orderData.id);
        return orderData.id;
      } else {
        const errorDetail = orderData?.details?.[0];
        const errorMessage = errorDetail
          ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
          : JSON.stringify(orderData);

        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error(error);
      // resultMessage(`Could not initiate PayPal Checkout...<br><br>${error}`);
    }
  };

  const onApprove = async (data) => {
    // Order is captured on the server and the response is returned to the browser
    try {
      const { data } = await axios.post(
        `https://project-backend-ct05.onrender.com/products//api/orders/${data.orderID}/capture`,
        null,
        {
          // method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // body: JSON.stringify({
          //     orderID: data.orderID
          // })
        }
      );
      // .then((response) => response.json());
      const orderData = data.data;
      // console.log('on approve=================', orderData);
      // Three cases to handle:
      //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
      //   (2) Other non-recoverable errors -> Show a failure message
      //   (3) Successful transaction -> Show confirmation or thank you message

      const errorDetail = orderData?.details?.[0];

      if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
        // (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
        // recoverable state, per https://developer.paypal.com/docs/checkout/standard/customize/handle-funding-failures/
        // return actions.restart();
      } else if (errorDetail) {
        // (2) Other non-recoverable errors -> Show a failure message
        throw new Error(`${errorDetail.description} (${orderData.debug_id})`);
      } else if (!orderData.purchase_units) {
        throw new Error(JSON.stringify(orderData));
      } else {
        // (3) Successful transaction -> Show confirmation or thank you message
        // Or go to another URL:  actions.redirect('thank_you.html');
        const transaction =
          orderData?.purchase_units?.[0]?.payments?.captures?.[0] ||
          orderData?.purchase_units?.[0]?.payments?.authorizations?.[0];
        console.log(
            `Transaction ${transaction.status}: ${transaction.id}<br><br>See console for all available details`,
        );
        // console.log(
        //     "Capture result",
        //     orderData,
        //     JSON.stringify(orderData, null, 2),
        // );
        // setSuccess(true);
      }
    } catch (error) {
      console.error(error);
      // resultMessage(
      //     `Sorry, your transaction could not be processed...<br><br>${error}`,
      // );
    }
  };
  return (
    <PayPalButtons
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    />
  );
}
