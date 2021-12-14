import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const submitBookToStore = (e) => {
    e.preventDefault();

    const newBook = {
      id: 4, // make sure it's unique
      title,
      categorie: 'Action',
      author: 'example',
      endRate: '20',
    };

    dispatch(addBook(newBook));
    setTitle('');
  };

  return (
    <div className="addbook-content">
      <h4>ADD NEW BOOK</h4>
      <div className="add-book-btns">
        <form onSubmit={submitBookToStore}>
          <input type="text" name="title" value={title} onChange={(e) => (setTitle(e.target.value))} />
          <input type="text" />
          <input type="submit" onClick={submitBookToStore} value="ADD BOOK" />

        </form>
      </div>
    </div>
  );
};
export default AddBook;
