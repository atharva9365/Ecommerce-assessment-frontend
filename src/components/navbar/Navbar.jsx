import React, { useState } from 'react';
import "./navbar.css";
import logo from "../../assets/frontendassest/logo.png";
import carticon from "../../assets/frontendassest/cart_icon.png";
import { Link } from 'react-router';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [menuVisible, setMenuVisible] = useState(false); // State to toggle nav-menu

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="Logo" />
          <p>SHOP CART</p>
        </div>

        {/* Nav menu with visibility controlled by menuVisible */}
        <ul className={`nav-menu ${menuVisible ? "visible" : ""}`}>
          <li onClick={() => setMenu("home")}>
            <Link style={{ textDecoration: "none", color: "#626262" }} to="/">
              Home
            </Link>
            {menu === "shop" ? <hr /> : null}
          </li>
          <li onClick={() => setMenu("products")}>
            <Link style={{ textDecoration: "none", color: "#626262" }} to="/mens">
              Products
            </Link>
            {menu === "mens" ? <hr /> : null}
          </li>
          
        </ul>

        <div className="nav-login-cart">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to='/cart'>
          <img
            src={carticon}
            alt="Cart"
            className="cart-icon"
          />
          </Link>
          <div className="nav-cart-counter">0</div>
          <button className='hidebtnn' style={{width:"2rem"}} onClick={toggleMenu}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
              </svg></button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
