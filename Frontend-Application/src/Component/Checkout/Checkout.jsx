// src/Component/Checkout/Checkout.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import "./Checkout.css";

export default function Checkout() {
  const handleConfirmOrder = () => {
    alert("✅ Your order has been placed successfully!");
    navigate("/HomePage"); // redirect to home page
  };
  const location = useLocation();
  const { subtotal, tax, grandTotal } = location.state || {
    subtotal: 0,
    tax: 0,
    grandTotal: 0,
  };

  return (
    <div className="checkout-container">
      <h2>Place Your Order</h2>
      <div className="order-summary">
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Sales Tax: ${tax.toFixed(2)}</p>
        <p className="grand-total">Grand Total: ${grandTotal.toFixed(2)}</p>
      </div>
      <div className="checkout-form ">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name " />
        </div>
        <input type="email" placeholder=" Email Address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State " />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country " />
        </div>
        <input type="text" placeholder="Phone Number" />
      </div>
      <button className="confirm-btn" onClick={handleConfirmOrder}>
        Confirm Order
      </button>
    </div>
  );
}
