import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Components/pages/Home'
import Nav from './Components/pages/Home/Nav';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
