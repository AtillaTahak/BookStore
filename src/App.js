import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import Books from './components/Books';
import './App.css';

const App = () => {
  const BookData = [
    {
      id: 1,
      title: 'Action',
      name: 'The Hunger Games',
      author: 'Suzanne Collins',
      endRate: '64',
    },
    {
      id: 2,
      title: 'Action',
      name: 'The Hunger Games',
      author: 'Suzanne Collins',
      endRate: '64',
    },
    {
      id: 3,
      title: 'Action',
      name: 'The Hunger Games',
      author: 'Suzanne Collins',
      endRate: '64',
    },
  ];
  return (
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
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/books" element={<Books data={BookData} />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
