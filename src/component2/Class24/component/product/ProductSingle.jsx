import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getProductData } from "../data/ProductData";

function ProductSingle() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const filterd = getProductData().filter((product) => product.id == id);
    if (filterd.length) {
      setProduct(filterd[0]);
    }
  }, []);
  return (
    <div className="text-center">
      <h2>Product Details</h2>
      {product !== null && (
        <div>
          <img
            src={product.image}
            style={{ width: "auto", height: 250 }}
            alt=""
          />
          <h3>{product.title}</h3>
          <h3 style={{ color: "red" }}>{product.price} BDT</h3>
        </div>
      )}
    </div>
  );
}

export default ProductSingle;
