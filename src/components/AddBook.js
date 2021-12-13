import React from 'react';

const AddBook =()=>(
    <div className='addbook-content'>
        <h4>ADD NEW BOOK</h4>
        <div className='add-book-btns'>
            <form>
                <input type="text" />
                <input list='book' />
                <input type="submit" value="ADD BOOK"/>
                <datalist id='book'>
                    <option value="Book 1"/>
                    <option value="Book 1"/>
                    <option value="Book 1"/>
                    <option value="Book 1"/>
                </datalist>
            </form>
        </div>
    </div>
)
export default AddBook;