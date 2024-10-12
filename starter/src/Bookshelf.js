const Bookshelf = ({shelfInfo, books}) =>{
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
                        <div className="book">
                            <div className="book-top">
                            <div className="book-cover" 
                                style={{ 
                                    width: 128, 
                                    height: 193, 
                                    backgroundImage: `url(${book.imageLink})`
                                }}>
                            </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors}</div>
                        </div>
                        </li>
                    );
                    })
                }
                </ol>
            </div>
        </div>
    );
}

export default Bookshelf;