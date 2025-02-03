import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  // Fetch products from the API or fallback to local data
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://localhost:44359/api/Inventory");

        // Transform the API response into the desired format
        const transformedProducts = response.data.map((item) => ({
          id: item.product.productId,
          title: item.product.productTitle,
          price: item.product.productPrice,
          costPrice: item.product.productCostPrice,
          description: item.product.productDescription,
          category: item.product.productCategory,
          image: item.product.productImageUrl,
          stockQuantity: item.stockQuantity,
        }));

        setProducts(transformedProducts);
      } catch (error) {
        console.error("Error fetching products from API:", error);
        fallbackToLocalData();
      }
    };

    const fallbackToLocalData = async () => {
      try {
        const localData = await import("./products.json"); // Adjust the path to your JSON file
        setProducts(localData.default);
      } catch (err) {
        console.error("Error loading fallback data:", err);
        setError("Unable to load products.");
      }
    };

    fetchProducts();
  }, []);

  if (error) return <div style={{ textAlign: "center", color: "red" }}>{error}</div>;

  return (
    <ProductCardsLayout products={products} />
  );
};

const ProductCardsLayout = ({ products }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      {products.length > 0 ? (
        products.map((product) => <ProductCard key={product.id} product={product} />)
      ) : (
        <div style={{ textAlign: "center", color: "gray" }}>No products found</div>
      )}
    </div>
  );
};

export default ProductList;

