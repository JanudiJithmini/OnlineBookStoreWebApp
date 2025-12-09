import React, { useState, useRef } from "react";
import "./BookCategory.css";
import BookSection from "./BookSection";
import book1 from "../../assets/kaliyugaya.jpg";
import book2 from "../../assets/cmjd-pic-2.png";
import book4 from "../../assets/1987.png";
import book5 from "../../assets/99082.jpg";
import book6 from "../../assets/Fairy-Tale-Series_Little-Red-Riding-Hood-FC-1-1.jpg";
import book7 from "../../assets/9781484767276-uk.jpg";
import book8 from "../../assets/The_Great_Gatsby.jpg";
import book9 from "../../assets/1100590.jpg";
import book10 from "../../assets/images.png";

function BookCategory() {
  const [selectedCategory, setSelectedCategory] = useState("fiction");

  const fictionRef = useRef(null);
  const childrensStoryRef = useRef(null);
  const novelsRef = useRef(null);

  const booksData = {
    fiction: [
      {
        image: book4,
        title: "Nineteen Eighty-Four",
        discount: 10,
        path: "/cart1",
      },
      { image: book2, title: "The Kite Runner", discount: 10, path: "/cart2" },
      { image: book1, title: "Gamperaliya", discount: 10, path: "/cart3" },
    ],
    childrensStory: [
      {
        image: book5,
        title: "The Gingerbread Man",
        discount: 20,
        path: "/cart4",
      },
      {
        image: book6,
        title: "Little Red Riding Hood",
        discount: 20,
        path: "/cart5",
      },
      { image: book7, title: "Rapunzel", discount: 20, path: "/cart6" },
    ],
    novels: [
      { image: book8, title: "The Great Gatsby", discount: 10, path: "/cart7" },
      { image: book9, title: "The Color Purple", discount: 10, path: "/cart8" },
      { image: book10, title: "Genocidal", discount: 10, path: "/cart9" },
    ],
  };

  // Function to scroll to the selected section
  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);

    // Scroll to the selected section
    if (category === "fiction" && fictionRef.current) {
      fictionRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (category === "childrens-story" && childrensStoryRef.current) {
      childrensStoryRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (category === "novels" && novelsRef.current) {
      novelsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="Category-page">
      <div className="category-dropdown">
        <label>Categories: </label>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="fiction">Fiction</option>
          <option value="childrens-story">Children's Story</option>
          <option value="novels">Novels</option>
        </select>
      </div>

      <div className="book-list-container">
        {/* Fiction Section */}
        <div ref={fictionRef}>
          <BookSection title="Fiction" books={booksData.fiction} />
        </div>

        {/* Children's Story Section */}
        <div ref={childrensStoryRef}>
          <BookSection
            title="Children's Story"
            books={booksData.childrensStory}
          />
        </div>

        {/* Novels Section */}
        <div ref={novelsRef}>
          <BookSection title="Novels" books={booksData.novels} />
        </div>
      </div>
    </div>
  );
}

export default BookCategory;
