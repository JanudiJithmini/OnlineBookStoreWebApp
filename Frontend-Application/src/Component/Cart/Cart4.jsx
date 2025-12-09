import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
function Cart4() {
  return (
    <div className="content">
      <div className="book-details">
        <div className="book-image">
          <img src="99082.jpg" alt="Kaliyugaya" />
          <span className="badge">In stock</span>
        </div>
        <div className="book-info">
          <h2>The Gingerbread Man</h2>
          <p className="original-price">LKR900.00</p>
          <p className="discounted-price">LKR840.00</p>
          <p>
            <strong>Languages:</strong> English
          </p>
          <p>
            <strong>Author:</strong> Mr XXX
          </p>
          <p>
            <strong>Category:</strong> Child Story
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

export default Cart4;
