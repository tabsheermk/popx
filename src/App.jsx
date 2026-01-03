import './App.css'
import { BrowserRouter as Router, Route, Routes, redirect } from 'react-router-dom'
import { RegisterPage } from './pages/RegisterPage'
import { Home } from './pages/Home'
import { Dashboard } from './pages/Dashboard'
import { LoginPage } from './pages/LoginPage'
import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: ""
  });

  return (
  <Router>
    <Routes>
      <Route path="/register" element={<RegisterPage formData={formData} setFormData={setFormData} />}/>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </Router>
  );
}

export default App
