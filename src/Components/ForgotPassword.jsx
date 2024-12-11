import { useState } from "react";
import { Link } from "react-router-dom";
import "./ForgotPassword.css"; // เชื่อมโยงกับไฟล์ CSS สำหรับหน้า forgot password

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // คุณสามารถเพิ่มการตรวจสอบอีเมลและส่งคำขอกู้คืนรหัสผ่านที่นี่
    if (email) {
      alert(`ลิงก์สำหรับกู้คืนรหัสผ่านได้ถูกส่งไปที่ ${email}`);
      // เพิ่มโค้ดสำหรับส่งคำขอการกู้คืนรหัสผ่านที่นี่
    } else {
      alert("กรุณากรอกอีเมล");
    }
  };

  return (
    <div className="forgot-password-container">
      <h2 className="forgot-password-title">ลืมรหัสผ่าน</h2> 
      <p className="forgot-password-description">
    กรุณากรอกอีเมลที่คุณลงทะเบียนไว้ <span>ระบบจะส่งลิงก์สำหรับกู้คืนรหัสผ่านไปให้</span>
        </p>
      <form onSubmit={handleForgotPassword}>
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

        <div className="mb-6">
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600"
          >
            ส่งคำขอกู้คืนรหัสผ่าน
          </button>
        </div>

        <div className="text-center">
          <Link to="/" className="text-indigo-600">
            กลับไปยังหน้าล็อกอิน
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
