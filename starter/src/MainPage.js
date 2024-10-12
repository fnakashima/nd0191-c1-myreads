import Bookshelf from "./Bookshelf";

const MainPage = ({bookshelves, books}) => {
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
                        return <Bookshelf shelfInfo={shelfInfo} books={booksInShelf}/>
                      })
                }
            </div>
        </div>
    )
}

export default MainPage;