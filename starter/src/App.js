import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import * as BookApi from "./BooksAPI";
import MainPage from "./MainPage";
import AddNewBookPage from "./AddNewBookPage";

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

  const changeShelf = (book, shelf) => {
    //console.log(`[App]changeShelf: ${book.id}, ${shelf}`);

    const updateBook = async(targetBook, shelf) => {
      const updatedBook = await BookApi.update(targetBook, shelf);
      //console.log(`Book updated: ${JSON.stringify(updatedBook, null, 2)}`);
      if(updatedBook.error){
        console.log(`Error: ${updatedBook.error}`);
        return;
      }
      // Update book
      // check if target book is in the list, if it is, update the shelf, otherwise, add it to the list
      if(!books.find(b => b.id === targetBook.id)){
        //console.log(`Book not found, adding to the list: ${targetBook.title}`);
        setBooks([...books, {
          ...targetBook,
          shelf: shelf
        }]);
      } else {
        //console.log(`Book found, updating the shelf: ${targetBook.title}`);
        setBooks(books.map(book => {
          return book.id === targetBook.id ? {
            ...book,
            shelf: shelf
          } : book;
        }))
      }

    }

    updateBook(book, shelf);
  }

  useEffect(() => {
    const getBooks = async () => {
      const myBooks = await BookApi.getAll();
      //console.log(JSON.stringify(myBooks, null, 2));
      if(myBooks.error){
        console.log(`Error: ${myBooks.error}`);
        return;
      }

      setBooks(myBooks.map((book) => {
        return {
          id: book.id,
          title: book.title,
          authors: book.authors ? book.authors.join(", ") : "",
          imageLink: book.imageLinks ? book.imageLinks["thumbnail"] : "",
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
    <Route path="/search" element={
      <AddNewBookPage bookshelves={bookshelves} books={books} changeShelf={changeShelf}/>
    }/>
  </Routes>
)

}

export default App;
