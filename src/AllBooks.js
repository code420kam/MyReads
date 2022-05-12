import React from "react";
import BookShelfChange from "./BookShelfChange";

const AllBooks = ({ Books, updateShelf }) => {

  return (
    <li>
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                     width: 128,
                     height: 193,
                     backgroundImage:
                     `url(${Books.imageLinks.thumbnail})`,}}>
                    </div>
                  <BookShelfChange Books={Books} updateShelf={updateShelf}/>
            </div>
            <div className="book-title">{Books.title}</div>
            <div className="book-authors">{Books.authors}</div>
        </div>
    </li>
  )
}

export default AllBooks;