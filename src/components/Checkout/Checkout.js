import reactDom from "react-dom";
import React from "react";
import { useSelector } from "react-redux";
import CheckOutProduct from "../CheckoutProduct/CheckOutProduct";
import SubTotal from "../Subtotal/SubTotal";
import "./CheckOut.css";

function Checkout() {
  const Items = useSelector((state) => state.basket.items);

  return (
    <div className="checkout__container">
      <div class="checkout__left">
        <div class="checkout__ad"></div>
        <h2>Your Shopping Cart</h2>
        {/* render the number of products based on the items in the cart  */}
        {Items.map((item, index) => {
          return <CheckOutProduct key={index.id} details={item} />;
        })}
      </div>
      <div class="checkout__right">
        <SubTotal></SubTotal>
      </div>
    </div>
  );
}

export default Checkout;
