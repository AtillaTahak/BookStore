import React from 'react';

const Book = () => (
    <div className='book-cart'>
        <div className='book-info'>
            <span>Action</span>
            <h3>The Hunger Games</h3>
            <p>Suzanne Collins</p>
            <div>
                <ul>
                    <li>Comment</li>
                    <li>Remove</li>
                    <li>Edit</li>
                </ul>
            </div>
        </div>
        <div className='book-end-ration'>
            %64
            Completed
        </div>
        <div className='book-current'>
            <span>Current Chapter</span>
            <h5>Chapter 17</h5>
            <button>Update Progress</button>
        </div>

    </div>

)

export default Book;