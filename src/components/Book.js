import React from 'react';

const Book = (props) => (
  <div className="book-cart" key={props.item_id}>
    <div className="book-info">
      <span>{props.bookContent.category}</span>
      <h3>{props.bookContent.title}</h3>
      <p>{props.bookContent.author}</p>
      <div className="btn-list">
        <button type="button">Comment</button>
        <button type="button" onClick={() => props.bookDelete(props)}>Remove</button>
        <button type="button">Edit</button>
      </div>
    </div>
    <div className="book-end-ration">
      %
      {props.bookContent.endRate}
      Completed
    </div>
    <div className="book-current">
      <span>Current Chapter</span>
      <h5>Chapter 17</h5>
      <button type="button">Update Progress</button>
    </div>

  </div>

);

export default Book;
