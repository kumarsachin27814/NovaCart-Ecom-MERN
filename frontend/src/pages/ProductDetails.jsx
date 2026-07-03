import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import "../styles/productDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `https://novacart-ecom-mern.onrender.com/api/products/${id}`,
        );
        ;
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(
        addToCart({
          productId: product._id,
          name: product.name,
          price: product.price,
          imageUrl: product.imageUrl,
          qty: 1,
        }),
      );

      alert("Successfully added to your cart!");
    }
  };

  if (loading) {
    return (
      <div
        style={{
          textAlign: "center",
          margin: "100px",
          color: "#f97316",
        }}
      >
        Loading Product...
      </div>
    );
  }

  if (!product) {
    return (
      <div
        style={{
          textAlign: "center",
          margin: "100px",
          color: "#ef4444",
        }}
      >
        Product Not Found
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> /{" "}
        {product.category} / <span>{product.name}</span>
      </div>

      <div className="product-detail">
        {/* Left Side */}
        <div className="detail-image-container">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="detail-image"
          />
        </div>

        {/* Right Side */}
        <div className="detail-info">
          <h2>{product.name}</h2>

          <p className="detail-price">₹{product.price.toFixed(2)}</p>

          <div className="detail-description">
            <h4>Product Description</h4>

            <p>{product.description}</p>
          </div>

          <button onClick={handleAddToCart} className="btn">
            Add to Shopping Cart
          </button>

          <p
            className={`stock {product.stock > 0 ? "in-stock" : "out-stock"}`}
          >
            {product.stock > 0
              ? `In Stock (₹{product.stock} units available)`
              : "Temporarily Out of Stock"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
