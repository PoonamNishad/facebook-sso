import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_BACKEND_URL;

const LoginForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/auth/login`, form);
      localStorage.setItem("token", res.data.token);
      navigate("/profile");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <form onSubmit={handleLogin} className="mb-4">
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full p-2 border rounded-md mb-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="w-full p-2 border rounded-md mb-2"
      />
      <button type="submit" className="w-full bg-green-600 text-white p-2 rounded-md">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
