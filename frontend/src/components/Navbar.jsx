import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useSelector } from "react-redux";
import "../styles/navbar.css";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const [search, setSearch] = useState("");

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("light", darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setSearch(params.get("search") || "");
  }, [location.search]);


  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    navigate(`/shop?search=${encodeURIComponent(value)}`);
  };



  const toggleHandler = () => {
      setDarkMode(!darkMode);
      setMenuOpen(false)
  }



  const handlerLogout = () => {
    logout();
    navigate("/login");
    setMenuOpen(false);
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

      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search products..."
          className="navbar-search-input"
          value={search}
          onChange={handleSearch}
        />
      </div>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>
          <div className="toggle-btn">
            <input
              type="checkbox"
              id="checkbox"
              checked={!darkMode}
              onChange={toggleHandler}
            />

            <label htmlFor="checkbox" className="toggle-label">
              <span className="toggle-ball"></span>
            </label>
          </div>
        </li>
        <li>
          <Link to="/shop" onClick={() => setMenuOpen(false)}>
            Shop
          </Link>
        </li>
        <li>
          <Link to="/cart" onClick={() => setMenuOpen(false)}>
            Cart ({cartItems.length})
          </Link>
        </li>
        {user ? (
          <>
            <li>
              <Link to="/profile" onClick={() => setMenuOpen(false)}>
                Hii, {user.name}
              </Link>
            </li>
            {user.role === "admin onClick={() => setMenuOpen(false)}" && (
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
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
