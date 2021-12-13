import React from 'react';
import Book from './Book';
import AddBook from './AddBook';

const Books = (props) => {
  const { data } = props;
  return (
    <div>
      {data.map((element) => (<Book key={element.id} bookContent={element} />))}
      <AddBook />
    </div>
  );
};
export default Books;
