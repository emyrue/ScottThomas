import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Headline from './pages/Headline';
import MobileMenu from './components/MobileMenu';
import logo from './icons/logo.png';
import menu from './icons/hamburger.svg';
import './App.css';

function App() {
  return (
    <Router>
      <header>
        <img className="logo" src={logo} alt="logo" />
        <nav>
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/gallery">Gallery</Link>
          <Link className="link" to="/stories">Stories</Link>
          <Link className="link" to="/contribute">Contribute</Link>
        </nav>
        <Link className="hamburger" to="/menu"><img className="menu" src={menu} alt="menu" /></Link>
      </header>
      <Routes>
        <Route path="/" element={<Headline />} />
        <Route path="/menu" element={<MobileMenu />} />
        <Route path="*" element={<div className="error">Page not found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
