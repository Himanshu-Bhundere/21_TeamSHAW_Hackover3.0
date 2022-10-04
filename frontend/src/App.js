import { Routes, Route } from 'react-router-dom';
import Home from './Components/pages/Home'
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<h1>Page not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
