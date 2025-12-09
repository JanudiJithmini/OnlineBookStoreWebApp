import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
function Cart1() {
  return (
    <div className="content">
      <div className="book-details">
        <div className="book-image">
          <img src="1987.png" alt="1984 by George Orwell" />
          <span className="badge">In stock</span>
        </div>
        <div className="book-info">
          <h2>George Orwell</h2>
          <p className="original-price">LKR800.00</p>
          <p className="discounted-price">LKR640.00</p>
          <p>
            <strong>Languages:</strong> English
          </p>
          <p>
            <strong>Author:</strong> George Orwell
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

export default Cart1;
