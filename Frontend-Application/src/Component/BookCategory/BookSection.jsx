import React from "react";
import BookCard from "./BookCard";
import "./BookCategory.css";

const BookSection = ({ title, books }) => {
  return (
    <div className="book-section">
      <h2>{title}</h2>

      <div className="book-list">
        {books.map((book, index) => (
          <BookCard key={index} {...book} />
        ))}
      </div>
    </div>
  );
};

export default BookSection;
