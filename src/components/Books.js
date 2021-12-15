import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';
import { RemoveBook } from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);

  const dispatch = useDispatch();
  const deleteBook = (book) => {
    dispatch(RemoveBook(book));
  };
  return (
    <div>
      {books.map((element) => (
        <Book
          key={element.id}
          bookContent={element}
          bookDelete={deleteBook}
        />
      ))}
      <AddBook />
    </div>
  );
};

export default Books;
