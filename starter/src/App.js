import "./App.css";
import { useState, useEffect } from "react";
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
    <div className="app">
      <MainPage bookshelves={bookshelves} books={books} />
    </div>
  );

}

export default App;
