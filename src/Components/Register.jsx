import { Link } from 'react-router-dom'; // เพิ่มบรรทัดนี้
import './Register.css';

const Register = () => {
  const [firstName, setFirstName] = ('');
  const [lastName, setLastName] = ('');
  const [phoneNumber, setPhoneNumber] = (''); 
  const [email, setEmail] = ('');
  const [password, setPassword] = ('');

  return (
    <div className="register-container">
      <h2 className="register-title">ลงทะเบียน</h2>
      <form>
        {/* First Name */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            ชื่อ:
          </label>
          <input
            className="input-field"
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        
        {/* Last Name */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
            นามสกุล:
          </label>
          <input
            className="input-field"
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
         {/* Phone Number */}
         <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
            เบอร์โทร:
          </label>
          <input
            className="input-field"
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            pattern="[0-9]{10}" // กำหนดให้เป็นเบอร์โทร 10 หลัก
           // placeholder="กรอกเบอร์โทร 10 หลัก"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            อีเมล:
          </label>
          <input
            className="input-field"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            รหัสผ่าน:
          </label>
          <input
            className="input-field"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        

        {/* Register Button */}
        <div className="mb-6">
          <button type="submit" className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600">
            ลงทะเบียนผู้ใช้งาน
          </button>
        </div>

        {/* Login Link */}
        <div className="text-center">
          <p className="text-sm text-gray-600 hover:text-gray-800">
            มีบัญชีอยู่แล้ว? <Link to="/" className="text-indigo-600">เข้าสู่ระบบ</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
