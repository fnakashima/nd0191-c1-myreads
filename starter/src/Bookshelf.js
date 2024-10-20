import PropTypes from 'prop-types';
import Book from './Book';

const Bookshelf = ({shelfInfo, books, bookshelves, changeShelf}) =>{
    return (
        <div className="bookshelf">
            <div className="bookshelf-title">
                <h2>{shelfInfo.name}</h2>
            </div>
            <div className="bookshelf-books">
                <ol className="books-grid">
                {
                    books.map((book) => {
                    return (
                        <li key={book.id}>
                            <Book book={book} bookshelves={bookshelves} changeShelf={changeShelf} />
                        </li>
                    );
                    })
                }
                </ol>
            </div>
        </div>
    );
}

Bookshelf.propTypes = {
    shelfInfo: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    bookshelves: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default Bookshelf;