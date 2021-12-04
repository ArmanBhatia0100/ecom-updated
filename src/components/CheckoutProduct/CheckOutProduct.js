import react from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/basketSlice";
import "./CheckOutProduct.css";

function CheckOutProduct(props) {
  const dispatch = useDispatch();
  const itemDetail = props.details;
  return (
    <div>
      <div className="checkout__product">
        <img
          style={{ width: 100, height: 200 }}
          src={itemDetail.src}
          alt="bag"
        ></img>

        <div className="product__info">
          <p>{itemDetail.title}</p>
          <p className="info__price">${itemDetail.price}</p>
          <div className="info__rating">⭐⭐⭐</div>
          <button
            onClick={() => dispatch(removeFromCart(itemDetail.id))}
            type="button"
          >
            Remove from cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckOutProduct;
