import React from "react";
import Title from "./Title";
import BooksState from "./BooksState";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = ({ Books, updateShelf }) => {
  const [setShowSearchpage] = useState(false);

  return (
    <div className="list-books">
      <Title />
      <BooksState Books={Books} updateShelf={updateShelf} />
      <div className="open-search">
        <Link to="/search" className="link-button" onClick={setShowSearchpage}>
          Add a book
        </Link>
      </div>
    </div>
  );
};

export default Home;