import React from 'react';

const BookshelfChange = ({ Books, updateShelf }) => {

    const bookShelf = Books.shelf;

    return (
        <div className="book-shelf-changer">
            <select defaultValue={bookShelf} onChange={(e) => updateShelf(Books, e.target.value)}>
                <option value="none" disabled>
                    Move to...
                </option>
                <option value="currentlyReading">
                    Currently Reading
                </option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}

export default BookshelfChange;