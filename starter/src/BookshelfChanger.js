import PropTypes from "prop-types";

const BookshelfChanger = ({book, bookshelves, changeShelf}) => {
    //console.log(`[BookshelfChanger]bookshelves: ${bookshelves}`);
    const handleChangeShelf = (e) => {
        console.log(`handleChangeShelf: ${e.target.value}`);
        changeShelf(book.id, e.target.value)
    };
    return (
        <div className="book-shelf-changer">
            <select value={book.shelf} onChange={handleChangeShelf}>
                <option value="none" disabled>
                　Move to...
                </option>
                {
                    bookshelves.map((shelf) => {
                        return (
                            <option value={shelf.type}>
                                {book.shelf === shelf.type && "✓"}
                                {book.shelf !== shelf.type && "　"}
                                {shelf.name}
                            </option>
                        );
                    })
                }
                <option value="none">　None</option>
            </select>
        </div>
    );
}

BookshelfChanger.propTypes = {
    book: PropTypes.object.isRequired,
    bookshlves: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default BookshelfChanger;