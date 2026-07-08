import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import API_URL from "../config";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading , setLoading] = useState(true);

  useEffect(() => {
     const fetchProducts = async () => {
       try {
         const res = await fetch(`${API_URL}/api/products`);
         const data = await res.json(); // array me convert kar diya
         setProducts([...data].reverse());
       } catch (error) {
         console.error(error);
       } finally {
         setLoading(false);
       }
     };

    fetchProducts();
  }, []);

  return (
    <div className="home-container">
      <div className="hero-banner">
        <h1>Welcome to NovaCart</h1>
        <p>Discover the best products at unbeatable prices.</p>
      </div>

      <h2>Featured Products</h2>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} /> // React ko batana padta hai ki list me har item unique kaunsa hai.
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
