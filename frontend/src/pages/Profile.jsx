import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import API_URL from "../config";
import "../styles/profile.css";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const fetchMyOrders = async () => {
      try {
        const res = await fetch(`${API_URL}/api/orders/myorders`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        const data = await res.json();

        if (res.ok) {
          setOrders(Array.isArray(data) ? data : []);
        } else {
          if (res.status === 401) {
            logout();
            navigate("/login");
          }
          setOrders([]);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMyOrders();
  }, [user, navigate, logout]);

  if (!user) return null;

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div>
          <h2>My Profile</h2>

          <p>
            <strong>Name:</strong> {user.name}
          </p>

          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <span className="profile-badge">
            Account Type : {user.role.toUpperCase()}
          </span>
        </div>

        <button
          className="btn profile-logout"
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          Logout
        </button>
      </div>

      <h3 className="order-title">Order History</h3>

      {loading ? (
        <p className="loading-text">Fetching your orders...</p>
      ) : orders.length === 0 ? (
        <div className="empty-order">
          <p>You haven't placed any orders yet.</p>

          <Link to="/shop" className="btn">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div className="order-card" key={order._id}>
              <div>
                <p>
                  Order ID :<span>{order._id}</span>
                </p>

                <p>
                  Placed On :
                  <span>{new Date(order.createdAt).toLocaleDateString()}</span>
                </p>

                <p>
                  Total :
                  <strong className="order-price">
                    ₹{order.totalAmount.toFixed(2)}
                  </strong>
                </p>
              </div>

              <span className={`status ${order.status}`}>{order.status}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Profile;
