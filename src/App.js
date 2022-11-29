import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/About'
import Page from './components/Page';
import Books from './components/Books';

function App() {
  return (
    <div className="app">
      <Router>

        <header className='header'>
          <h1>My app</h1>
          <nav className='navBar'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/books'>Books</Link>
          </nav>
        </header>

        <div className='page'>
          <Routes>
            <Route path='/' element={<Page pageTitle='Home' />} />
            <Route path='about' element={<About />} />
            <Route path='about/:name' element={<About />} />
            <Route path="contact" element={<Page pageTitle='Contact' />} />
            <Route path='books' element={<Books />} />
          </Routes>
        </div>

      </Router>
    </div>
  );
}

export default App;
