import React from "react";
import { Link } from "react-router-dom";
import "./BookCategory.css";

const BookCard = ({ image, title, discount, path }) => {
  return (
    <Link
      to={{
        pathname: path,
        state: { books: [{ image, title, discount }] },
      }}
      className="book-card"
    >
      <div className="book-card-content">
        {image && <img src={image} alt={title} />}
        {discount && <span className="discount">{discount}%</span>}
        <p>{title}</p>
      </div>
    </Link>
  );
};

export default BookCard;
