import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Categories from './components/Categories';
import Books from './components/Books';
import './App.css';

const App = () => (
  <Router>
    <div className="header">
      <nav>
        <ul>
          <li>
            <span className="header-logo">
              Bookstore CMS
            </span>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  </Router>
);

export default App;
