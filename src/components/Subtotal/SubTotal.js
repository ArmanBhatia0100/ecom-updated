import React from "react";
import "./SubTotal.css";
import Currency from "currency-formatter";
import { useSelector } from "react-redux";

function SubTotal() {
  let totalPrice = 0;
  let totalItems;
  useSelector((state) => {
    state.basket.items.forEach((item, index) => {
      totalPrice = totalPrice + item.price;
      totalItems = index + 1;
    });
  });
  return (
    <div>
      <div class="subtotal__container">
        <p>
          Subtotal ({totalItems} Items): <strong>${totalPrice}</strong>
        </p>
        <div>
          <input type="checkbox" name="gift" id="gift_box" />
          <label for="gift_box">This order conatains a gift.</label>
        </div>
        <button>Proceed to checkout</button>
      </div>
    </div>
  );
}

export default SubTotal;
