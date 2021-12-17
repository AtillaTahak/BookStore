import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'node-uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategorie] = useState('Action');

  const submitBookToStore = (e) => {
    e.preventDefault();

    const newBook = {
      item_id: v4(),
      title,
      category,
      author: 'some one',
      endRate: '20',
    };

    dispatch(addBook(newBook));
    setTitle('');
    setCategorie('');
  };
  const handleChange = (e) => {
    setCategorie(e.target.value);
  };

  return (
    <div className="addbook-content">
      <h4>ADD NEW BOOK</h4>
      <div className="add-book-btns">
        <form onSubmit={submitBookToStore}>
          <input
            className="book-title"
            placeholder="Book title"
            type="text"
            name="title"
            value={title}
            onChange={(e) => (setTitle(e.target.value))}
          />

          <select name="category" id="category" onChange={handleChange} value={category}>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Dram">Dram</option>
          </select>
          <input className="add-book" type="submit" onClick={submitBookToStore} value="ADD BOOK" />

        </form>
      </div>
    </div>
  );
};
export default AddBook;
