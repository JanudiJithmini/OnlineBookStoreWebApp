import React from "react";
import "./HomePage.css";
import Homeimage from "../../assets/library-book-bookshelf-read.png";
import book1 from "../../Assets/cmjd-pic-1.png";
import book2 from "../../assets/cmjd-pic-2.png";
import book3 from "../../assets/cmjd-pic-3.png";
import Footer from "../Footer/footer";

function HomePage() {
  const books = [
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      description:
        "A novel by J.D. Salinger, published in 1951. The novel tells the story of a young Holden Caulfield.",
      image: book1,
    },
    {
      title: "How Innovation Works",
      author: "Matt Ridley",
      description:
        "A book by Matt Ridley, published in 2017. The book is about the evolution of innovation in the 21st century.",
      image: book2,
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description:
        "A novel by F. Scott Fitzgerald, published in 1925. The novel tells the story of a young millionaire and his family.",
      image: book3,
    },
  ];
  return (
    <>
      <div className="home-image">
        <img src={Homeimage} alt=""></img>
      </div>
      <div className="book-list-container-main">
        <h2 className="topic-heading">Recommended Books</h2>
        <div className="book-list">
          {books.map((book, index) => (
            <div key={index} className="book-box">
              <img
                src={book.image}
                alt={`Cover of ${book.title}`}
                style={{ width: "150px", height: "200px", objectFit: "cover" }}
              />
              <h3>{book.title}</h3>
              <p>
                <strong>Author:</strong> {book.author}
              </p>
              <p>{book.description}</p>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
