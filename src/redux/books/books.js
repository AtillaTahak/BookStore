// books.js
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const GET_BOOK = 'GET_BOOK';
const GET_ERROR = 'GET_ERROR';

// books.js
const initialState = [

];
const ApiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/dnYphgnWPQRkqPHTRJPI/books/';

export const RemoveBook = (book) => async (dispatch) => {
  const delBook = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: book.bookContent.item_id,
    }),
  };

  fetch(ApiUrl + book.bookContent.item_id, delBook).then(() => dispatch({
    type: 'REMOVE_BOOK', payload: book,
  }));
};

export const addBook = (payload) => async (dispatch) => {
  const postBook = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: payload.item_id,
      title: payload.title,
      category: payload.category,
    }),
  };
  fetch(ApiUrl, postBook).then(() => dispatch(
    { type: 'ADD_BOOK', payload },
  ));

  /*  type: ADD_BOOK,
  payload, */
};

export const getBook = () => async (dispatch) => {
  const entries = await fetch(ApiUrl).then(((response) => response.json()));
  const books = Object.entries(entries).map(([key, value]) => {
    const [bookEntries] = value;
    return {
      item_id: key,
      ...bookEntries,
    };
  });
  dispatch({
    type: 'GET_BOOK',
    payload: books,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOK:
      return [...state, ...action.payload];
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
      return state.filter((x) => x.item_id !== action.payload.bookContent.item_id);
    case GET_ERROR:
      return [...state, []];
    default:
      return state;
  }
};

export default reducer;
