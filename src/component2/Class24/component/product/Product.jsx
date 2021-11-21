import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getProductData } from "../data/ProductData";
import "../assets/product.css";
import ProductFilter from "./ProductFilter";

function Product() {
  const [products, setProducts] = useState(getProductData());
  const [searchParams] = useSearchParams();
  const min_price =
    searchParams.get("min_price") == null ? "" : searchParams.get("min_price");
  const max_price =
    searchParams.get("max_price") == null ? "" : searchParams.get("max_price");
  const search =
    searchParams.get("search") == null ? "" : searchParams.get("search");
  useEffect(() => {
    filterProduct();
  }, []);

  const filterProduct = () => {
    if (search.length || min_price.length || max_price.length) {
      //filter product with these condition
      const min = parseFloat(min_price);
      const max = parseFloat(max_price);

      const filtered = products.filter((product) => {
        //min Price
        if (min > 0 && min > product.price) {
          return false;
        }
        //max price
        if (max > 0 && max < product.price) {
          return false;
        }
        //search
        if (
          search.length > 0 &&
          !product.title.toLowerCase().includes(search.toLowerCase())
        ) {
          return false;
        }
        return true;
      });
      setProducts(filtered);
    }
  };

  return (
    <div className="product-area-full text-center">
      <h2> Product</h2>
      <br />
      <ProductFilter />

      <div className="product-area">
        {products.map((product, index) => (
          <div key={index} className="product-single">
            <img
              src={product.image}
              alt=""
              style={{ width: "auto", height: 100 }}
            />
            <h3>{product.title}</h3>
            <h4 style={{ color: "red" }}>
              {product.price} <span style={{ color: "#415" }}>Taka</span>
            </h4>
            <p>
              <Link to={`/product/${product.id}`} className="product-button">
                Product Detaile
              </Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
