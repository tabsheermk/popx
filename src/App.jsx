import './App.css'
import { BrowserRouter as Router, Route, Routes, redirect } from 'react-router-dom'
import { RegisterPage } from './pages/RegisterPage'
import { Home } from './pages/Home'
import { Dashboard } from './pages/Dashboard'
import { LoginPage } from './pages/LoginPage'

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/register" element={<RegisterPage />}/>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </Router>
  );
}

export default App
