import { useState } from "react";
import PropTypes from "prop-types";
import * as BookApi from "./BooksAPI";
import Search from "./Search";
import SearchResult from "./SearchResult";

const AddNewBookPage = ({bookshelves, books, changeShelf}) => {
    const searchMaxResults = 20;
    const [searchResult, setSearchResult] = useState([]);

    const handleSearch = (searchTerm) => {
        //console.log(`handleSearch: ${e.target.value}`);
        //console.log(`searchTerm: ${searchTerm}`);

        if(searchTerm !== ""){
            //console.log(`Searching books...: ${searchTerm}`);
            const searchBooks = async(term) => {
                if(term === "") {
                    setSearchResult([]);
                    return;
                }
                const result = await BookApi.search(term, searchMaxResults);
                if(result.error){
                    console.log(`Error: ${result.error}`);
                    setSearchResult([]);
                    return;
                }
                //console.log(`searchBooks: ${JSON.stringify(result, null, 2)}`);
                setSearchResult(result.map(book => {
                    const myBook = books.find((myBook) => myBook.id === book.id);
                    return {
                        id: book.id,
                        title: book.title,
                        authors: book.authors ? book.authors.join(", ") : "",
                        imageLink: book.imageLinks ? book.imageLinks["thumbnail"] : "",
                        shelf: myBook ? myBook.shelf : "none"
                    }
                }));
            }
        
            searchBooks(searchTerm);
        } else{
            //console.log("search term is empty");
            setSearchResult([]);
        }
    }
    
    const handleChangeShelf = (book, shelf) => {
        //console.log(`handleChangeShelf: ${book.id}, ${shelf}`);
        changeShelf(book, shelf);
        setSearchResult(searchResult.map((b) => {
            return b.id === book.id ? {
                ...b,
                shelf: shelf
            } : b;
        }));
    }

    return(
        <div>
            <Search search={handleSearch}/>
            <SearchResult bookshelves={bookshelves} books={searchResult} changeShelf={handleChangeShelf}/>
        </div>
    );
}

AddNewBookPage.propTypes = {
    bookshelves: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default AddNewBookPage;