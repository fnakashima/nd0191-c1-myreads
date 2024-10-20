import PropTypes from "prop-types";
import Book from './Book';

const SearchResult = ({bookshelves, books, changeShelf}) => {
    ///console.log(`[SearchResult]Bookshelves: ${bookshelves}`);
    //console.log(`[SearchResult]SearchResult: ${books}`);
    return (
        <div className="search-books-results">
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
};

SearchResult.propTypes = {
    bookshelves: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default SearchResult;