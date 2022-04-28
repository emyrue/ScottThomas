import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <header>
        <nav>
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/gallery">Gallery</Link>
          <Link className="link" to="/stories">Stories</Link>
          <Link className="link" to="/contribute">Contribute</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" />
      </Routes>
    </Router>
  );
}

export default App;
