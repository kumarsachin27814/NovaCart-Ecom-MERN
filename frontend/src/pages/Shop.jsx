import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useLocation } from "react-router-dom";
import "../styles/product.css";
import API_URL from "../config";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${API_URL}/api/products`);
        const data = await res.json();
        setProducts([...data].reverse());
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);


  useEffect(() => {
  const params = new URLSearchParams(location.search);
  setSearch(params.get("search") || "");
}, [location.search]);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setSearch(params.get("search") || "");
  }, [location.search]);

  return (
    <div className="shop-container">
      <h2>All Products</h2>
      
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
