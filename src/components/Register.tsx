import { useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_BACKEND_URL;

const RegisterForm = () => {
  const [registerForm, setRegisterForm] = useState({ name: "", email: "", password: "" });

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/auth/register`, registerForm);
      alert("Registration successful! Please login.");
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input
        type="text"
        placeholder="Name"
        value={registerForm.name}
        onChange={(e) => setRegisterForm({ ...registerForm, name: e.target.value })}
        className="w-full p-2 border rounded-md mb-2"
      />
      <input
        type="email"
        placeholder="Email"
        value={registerForm.email}
        onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
        className="w-full p-2 border rounded-md mb-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={registerForm.password}
        onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
        className="w-full p-2 border rounded-md mb-2"
      />
      <button type="submit" className="w-full bg-gray-800 text-white p-2 rounded-md">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
