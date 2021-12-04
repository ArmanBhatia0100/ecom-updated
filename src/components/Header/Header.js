import react from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Css imports
import "./Header.css";

// icons
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  const itemsInCart = useSelector((state) => state.basket.items.length);

  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header__logo">
          <h2 className="logo__Title">eShop</h2>
        </div>
      </Link>
      <div className="header__searchBar">
        <input type="text" className="search__input" />
        <SearchIcon />
      </div>
      <div className="header__nav">
        <div className="nav__navItem">
          <span class="nav__lineOne">Hello Guest</span>
          <span class="nav__lineTwo">Sign In</span>
        </div>
        <div className="nav__navItem">
          <span class="nav__lineOne">Your</span>
          <span class="nav__lineTwo">Shop</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none", color: "white" }}>
          <div className="nav__navItem">
            <ShoppingBasketIcon />
            <span class="nav__lineTwo basketCount">{itemsInCart}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
