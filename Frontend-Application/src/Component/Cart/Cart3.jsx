import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

function Cart3() {
  return (
    <div className="content">
      <div className="book-details">
        <div className="book-image">
          <img src="kaliyugaya.jpg" alt="Kaliyugaya" />
          <span className="badge">In stock</span>
        </div>
        <div className="book-info">
          <h2>Kaliyugaya</h2>
          <p className="original-price">LKR900.00</p>
          <p className="discounted-price">LKR840.00</p>
          <p>
            <strong>Languages:</strong> Sinhala
          </p>
          <p>
            <strong>Author:</strong> Martin Wickramasingh
          </p>
          <p>
            <strong>Category:</strong> Fiction
          </p>
          <p>
            <strong>Sub Category:</strong> Literary criticism, poetry, fiction
          </p>
          <Link to="/ShoppingCart">
            <button className="add-to-cart">🛒 Go To Shopping Cart</button>
          </Link>
        </div>
        <div className="discount-badge">10%</div>
      </div>
    </div>
  );
}

export default Cart3;
