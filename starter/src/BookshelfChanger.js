import PropTypes from "prop-types";

const BookshelfChanger = ({book, bookshelves, changeShelf}) => {
    //console.log(`[BookshelfChanger]bookshelves: ${bookshelves}`);
    const handleChangeShelf = (e) => {
        console.log(`handleChangeShelf: ${e.target.value}`);
        changeShelf(book, e.target.value)
    };
    return (
        <div className="book-shelf-changer">
            <select value={book.shelf} onChange={handleChangeShelf}>
                <option key={"move"} value="move" disabled>
                　Move to...
                </option>
                {
                    bookshelves.map((shelf) => {
                        return (
                            <option key={shelf.type} value={shelf.type}>
                                {book.shelf === shelf.type && "✓"}
                                {book.shelf !== shelf.type && "　"}
                                {shelf.name}
                            </option>
                        );
                    })
                }
                <option key={"none"} value="none">
                    {book.shelf === "none" && "✓"}
                    {book.shelf !== "none" && "　"}
                    None
                </option>
            </select>
        </div>
    );
}

BookshelfChanger.propTypes = {
    book: PropTypes.object.isRequired,
    bookshelves: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default BookshelfChanger;