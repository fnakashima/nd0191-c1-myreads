import PropTypes from "prop-types";
import BookshelfChanger from "./BookshelfChanger";

const Book = ({book, bookshelves, changeShelf}) => {
    return (
        <div>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" 
                        style={{ 
                            width: 128, 
                            height: 193, 
                            backgroundImage: `url(${book.imageLink})`
                        }}>
                    </div>
                    <BookshelfChanger book={book} bookshelves={bookshelves} changeShelf={changeShelf}/>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        </div>
    );
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    bookshelves: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default Book;