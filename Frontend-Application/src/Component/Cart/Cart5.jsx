import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

function Cart5() {
  return (
    <div className="content">
      <div className="book-details">
        <div className="book-image">
          <img
            src="Fairy-Tale-Series_Little-Red-Riding-Hood-FC-1-1.jpg"
            alt="Little Red Riding Hood"
          />
          <span className="badge">In stock</span>
        </div>
        <div className="book-info">
          <h2>Little Red Riding Hood</h2>
          <p className="original-price">LKR900.00</p>
          <p className="discounted-price">LKR840.00</p>
          <p>
            <strong>Languages:</strong> English
          </p>
          <p>
            <strong>Author:</strong> Mr XXX
          </p>
          <p>
            <strong>Category:</strong> Children Story
          </p>
          <p>
            <strong>Sub Category:</strong> Literary criticism, poetry, fiction
          </p>
          <Link to="/ShoppingCart">
            <button className="add-to-cart">🛒 Go To Shopping Cart</button>
          </Link>
        </div>
        <div className="discount-badge">20%</div>
      </div>
    </div>
  );
}

export default Cart5;
