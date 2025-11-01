import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import EsqueceuSenha1 from './pages/esqueceuSenha1';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/esqueceuSenha1" element={<EsqueceuSenha1 />} /> 
      </Routes>
    </Router>
  );
}

export default App;
