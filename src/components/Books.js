import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';
import { getBook, RemoveBook } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer);

  useEffect(() => {
    dispatch(getBook());
  }, [dispatch]);

  const deleteBook = (book) => {
    dispatch(RemoveBook(book));
  };
  return (
    <div>
      {books.map((element) => (
        <Book
          key={element.item_id}
          bookContent={element}
          bookDelete={deleteBook}
        />
      ))}
      <AddBook />
    </div>
  );
};

export default Books;
