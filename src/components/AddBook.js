import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'node-uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [categorie, setCategorie] = useState('Action');

  const submitBookToStore = (e) => {
    e.preventDefault();

    const newBook = {
      id: v4(),
      title,
      categorie,
      author,
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
          <input type="text" name="title" value={title} onChange={(e) => (setTitle(e.target.value))} />
          <input type="text" name="author" value={author} onChange={(e) => (setAuthor(e.target.value))} />
          <select name="categories" id="categories" onChange={handleChange} value={categorie}>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Dram">Dram</option>
          </select>
          <input type="submit" onClick={submitBookToStore} value="ADD BOOK" />

        </form>
      </div>
    </div>
  );
};
export default AddBook;
