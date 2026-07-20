import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useSelector } from "react-redux";
import "../styles/navbar.css";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("light", !darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);


  const handlerLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img
            src="/NovaCart.jpeg"
            alt="NovaCartLogo"
            className="navbar-logo"
          />
          NovaCart
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <div className="toggle-btn">
            <input
              type="checkbox"
              id="checkbox"
              checked={!darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />

            <label htmlFor="checkbox" className="toggle-label">
              <span className="toggle-ball"></span>
            </label>
          </div>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">Cart ({cartItems.length})</Link>
        </li>
        {user ? (
          <>
            <li>
              <Link to="/profile">Hii, {user.name}</Link>
            </li>
            {user.role === "admin" && (
              <li>
                <Link to="/admin">Admin</Link>
              </li>
            )}
            <li>
              <button onClick={handlerLogout} className="btn-logout">
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
