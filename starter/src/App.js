import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import * as BookApi from "./BooksAPI";
import MainPage from "./MainPage";

function App() {
  const bookshelves = [
    {
      order: 1,
      type: "currentlyReading",
      name: "Currently Reading",
    },
    {
      order: 2,
      type: "wantToRead",
      name: "Want to Read",
    },
    {
      order: 3,
      type: "read",
      name: "Read",
    },
  ];

  const [books, setBooks] = useState([]);

  const changeShelf = (bookId, shelf) => {
    console.log(`[App]changeShelf: ${bookId}, ${shelf}`);

    const updateBook = async(bookId, shelf) => {
      const targetBook = books.find((book) => book.id === bookId);
      const updatedBook = await BookApi.update(targetBook, shelf);
      console.log(`Book updated: ${updatedBook}`);
      // Update book
      setBooks(books.map(book => {
        return book.id === bookId ? {
          ...book,
          shelf: shelf
        } : book;
      }))
    }

    updateBook(bookId, shelf);
  }

  useEffect(() => {
    const getBooks = async () => {
      const myBooks = await BookApi.getAll();
      console.log(myBooks);
      setBooks(myBooks.map((book) => {
        return {
          id: book.id,
          title: book.title,
          authors: book.authors.join(", "),
          imageLink: book.imageLinks["thumbnail"],
          shelf: book.shelf
        }
      }))
    }

    getBooks();
  }, []);

return (
  <Routes>
    <Route exact path="/" element={
      <div className="app">
        <MainPage bookshelves={bookshelves} books={books} changeShelf={changeShelf}/>
      </div>
    }/>
  </Routes>
)

}

export default App;
