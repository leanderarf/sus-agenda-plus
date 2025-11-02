import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import EsqueceuSenha1 from './pages/esqueceuSenha1';
import EsqueceuSenha2 from './pages/esqueceuSenha2';
import EsqueceuSenha3 from './pages/esqueceuSenha3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/esqueceuSenha1" element={<EsqueceuSenha1 />} /> 
        <Route path="/esqueceuSenha2" element={<EsqueceuSenha2 />} /> 
        <Route path="/esqueceuSenha3" element={<EsqueceuSenha3 />} />
      </Routes>
    </Router>
  );
}

export default App;
