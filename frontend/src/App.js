import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Components/pages/Home'
import Nav from './Components/pages/Home/Nav';
function App() {
  return (
    <div className="App">
      {/* <header>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/contact">Contact</Link></li>       
            </ul>
        </nav>
    </header> */}
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='login' element={<h1>Login</h1>} />
      </Routes>
    </div>
  );
}

export default App;
