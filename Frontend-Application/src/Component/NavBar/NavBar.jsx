import React from "react";
import "./NavBar.css";
import MenuList from "../MenuLsit/MenuList";

function NavBar() {
  return (
    <div className="nav-bar">
      <h1>
        Online <span>Bookstore</span>
      </h1>
      <img src="bookstore-removebg.png" alt="" />
      <MenuList linkName="Home" url="/" />
      <MenuList linkName="Category" url="/categories" />
      {/* <MenuList linkName="Shopping Cart" url="/shoppingcart" /> */}
      <MenuList linkName="Register" url="/adduser" />
      <MenuList linkName="Login" url="/login" />
      <MenuList linkName="Checkout" url="/checkout" />
      <MenuList linkName="Edit User" url="/edituser" />
      <MenuList linkName="View User" url="/viewuser" />

      {/* <div className="search-bar">
        <input type="text" placeholder="Search for books..." />
        <button className="search-button">Search</button>
      </div> */}
    </div>
  );
}

export default NavBar;
