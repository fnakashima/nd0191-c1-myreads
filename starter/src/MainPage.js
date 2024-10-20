import PropTypes from "prop-types";
import Bookshelf from "./Bookshelf";

const MainPage = ({bookshelves, books, changeShelf}) => {
    return (
        <div>
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                {
                    bookshelves.map((shelf) => {
                        const shelfInfo = bookshelves.find((shelfInfo) => shelfInfo.type === shelf.type);
                        const booksInShelf = books.filter((book) => book.shelf === shelf.type);
                        return <Bookshelf key={shelf.type} shelfInfo={shelfInfo} books={booksInShelf} bookshelves={bookshelves} changeShelf={changeShelf}/>
                      })
                }
            </div>
            <div className="open-search">
                <a href="/search">Add a book</a>
            </div>
        </div>
    )
}

MainPage.propTypes = {
    bookshelves: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default MainPage;