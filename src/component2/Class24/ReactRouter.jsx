import React from "react";
import "./assets/Route.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contact from "./component/ContactUs";
import Home from "./component/Home";
import Product from "./component/product/Product";
import ProductSingle from "./component/product/ProductSingle";
function ReactRouter() {
  return (
    <BrowserRouter>
      <div className="text-center">
        <ul className="nabbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li>
            <Link to="/404">404</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductSingle />}></Route>
        <Route
          path="*"
          element={
            <main className="text-center" style={{ padding: "1rem" }}>
              <h1>404 Error</h1>{" "}
              <p style={{ color: "red" }}>Sorry, Page Not found</p>
            </main>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default ReactRouter;
