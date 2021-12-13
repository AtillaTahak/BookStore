import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from './components/Home';
import Categories from './components/Categories';
import Books from './components/Books';


const rootElement = document.getElementById('root');
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/books">Books</Link>
                        </li>
                        <li>
                            <Link to="/categories">Categories</Link>
                        </li>
                    </ul>
                </nav>
                <Routes >
                    <Route path="/" exact element={<Home />} />
                    <Route path="/books" element={<Books />} />
                    <Route path="/categories" element={<Categories />} />
                </Routes>
            </div>
        </Router>

    </React.StrictMode>, rootElement
)