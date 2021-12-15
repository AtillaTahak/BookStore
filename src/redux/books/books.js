// books.js
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

// books.js
const initialState = [

];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const RemoveBook = (book) => ({
  type: REMOVE_BOOK,
  payload: book,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      /*
      return a new state object in which the
      books array will contain a new book object, passed by action.payload.
      Remember -  you MUSN'T mutate the state. You have to return a new state object - i.e.:
      return [ ...state, action.payload];
      */
      return [...state, action.payload];

    case REMOVE_BOOK:
    /*
    use ES6 filter() method to create a
    new array, which will not contain the book you
    want to remove from the store (filter by the id key - i.e.:
    return state.filter(book => book.id !== id);
    */

      return state.filter((x) => x.id !== action.payload.bookContent.id);
    default:
      return state;
  }
};

export default reducer;
