import React from "react";
import BookShelf from "./BookShelf";

const BooksState = ({ Books, updateShelf }) => {

    const currentlyReading = Books.filter((book) => book.shelf === "currentlyReading");
    const wantToRead = Books.filter((book) => book.shelf === "wantToRead");
    const read = Books.filter((book) => book.shelf === "read");

    return (
        <div className="list-books-content">
            <div>
                <BookShelf name="Currently Reading" Books={currentlyReading} updateShelf={updateShelf}/>
                <BookShelf name="Want to Read" Books={wantToRead} updateShelf={updateShelf}/>
                <BookShelf name="Read" Books={read} updateShelf={updateShelf}/>
            </div>
        </div>
    )
}

export default BooksState