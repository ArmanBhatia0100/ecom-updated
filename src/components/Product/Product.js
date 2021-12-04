import React from "react";
import reactDom from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/basketSlice";
import "./Product.css";

function Product(props) {
  const dispatch = useDispatch();
  let data = props.details;
  return (
    <div>
      <div className="product">
        <div className="product__info">
          <p>{data.title}</p>
          <p className="info__price">${data.price}</p>
          <div className="info__rating">⭐⭐⭐</div>
        </div>
        <img style={{ width: 100, height: 200 }} src={data.img} alt="bag"></img>
        <button
          onClick={() =>
            dispatch(
              addToCart({
                id: data.id,
                title: data.title,
                price: data.price,
                src: data.img,
              })
            )
          }
          type="button"
        >
          Add to basket
        </button>
      </div>
    </div>
  );
}

export default Product;
