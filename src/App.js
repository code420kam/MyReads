import "./App.css";
import { useState, useEffect, useCallback } from "react";
import * as BooksAPI from "./BooksAPI";
import SearchBooks from "./SearchBooks";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";


const App = () => {
  const [Books, setBooks] = useState([]);

  const updateShelf = useCallback((book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      setBooks(Books.map((b) => (b.id === book.id ? { ...book, shelf } : b)));
    });
  }, []);

  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setBooks(books);
    });
  }, [updateShelf]);

  const updateBooks = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      setBooks(Books.map((b) => (b.id === book.id ? { ...book, shelf } : b)));
    });
  };
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Home Books={Books} updateShelf={updateBooks} />}
      />
      <Route
        path="/search"
        element={
          <SearchBooks
            Books={Books}
            updateShelf={setBooks}
            updateExistBooks={updateBooks}
          />
        }
      />
    </Routes>
  );
};

export default App;