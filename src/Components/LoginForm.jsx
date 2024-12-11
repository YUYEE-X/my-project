// src/Components/LoginForm.jsx
import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // เพิ่ม useNavigate
import "./LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // เรียกใช้ useNavigate

  const handleLogin = (e) => {
    e.preventDefault();
    // เช็คข้อมูลการล็อกอินที่นี่
    if (email && password) {
      alert("เข้าสู่ระบบสำเร็จ");
      navigate("/home"); // เปลี่ยนหน้าไปที่ /home เมื่อเข้าสู่ระบบสำเร็จ
    } else {
      alert("กรุณากรอกข้อมูลให้ครบ");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">เข้าสู่ระบบ</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            อีเมล:
          </label>
          <input
            className="input-field"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            รหัสผ่าน:
          </label>
          <input
            className="input-field"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4 text-right">
          <Link to="/forgot-password" className="forgot-password">
            <i className="fas fa-lock"></i> ลืมรหัสผ่าน?
          </Link>
        </div>

        <div className="mb-6">
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600"
          >
            เข้าสู่ระบบ
          </button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600 hover:text-gray-800">
            ยังไม่มีบัญชี?{" "}
            <Link to="/register" className="text-indigo-600">
              สมัครสมาชิก
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
