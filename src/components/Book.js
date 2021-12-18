import React from 'react';

const Book = (props) => (
  <div className="book-cart" key={props.item_id}>
    <div className="book-info">
      <span className="category">{props.bookContent.category}</span>
      <h3 className="title">{props.bookContent.title}</h3>
      <p>Author Area</p>
      <div className="btn-list">
        <button type="button">Comment</button>
        <button type="button" onClick={() => props.bookDelete(props)}>Remove</button>
        <button type="button">Edit</button>
      </div>
    </div>
    <div className="book-end-ration">
      <div className="circle-wrap">
        <div className="circle">
          <div className="mask full">
            <div className="fill" />
          </div>
          <div className="mask half">
            <div className="fill" />
          </div>
          <div className="inside-circle" />
        </div>
      </div>
      <div className="completed-text">
        <span className="completed-rate">
          64
          %
        </span>
        <p>Completed</p>
      </div>
    </div>
    <div className="book-current">
      <span>Current Chapter</span>
      <p>Chapter 17</p>
      <button type="button" className="btn-progress">Update Progress</button>
    </div>

  </div>

);

export default Book;
