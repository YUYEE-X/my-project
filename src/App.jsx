// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import Register from './Components/Register';
import ForgotPassword from './Components/ForgotPassword';
import Home from './Components/Home'; 

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/home" element={<Home />} /> {/* เส้นทางสำหรับ Home */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
