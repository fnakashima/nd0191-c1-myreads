import "./App.css";
import { useState, useEffect } from "react";
import * as BookApi from "./BooksAPI";

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
  );

}

export default App;
