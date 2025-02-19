import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Card, Typography } from "antd";
import FacebookLoginButton from "./FacebookLoginButton";

const { Title, Text } = Typography;
const API_URL = process.env.REACT_BACKEND_URL;

const LoginForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/auth/login`, form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("fbToken", res.data.fbToken);
      navigate("/profile");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-96 shadow-lg rounded-lg">
        <Title level={3} className="text-center">Login</Title>
        <Form layout="vertical" onFinish={handleLogin}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email!" }]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Login
            </Button>


          </Form.Item>
        </Form>
        <FacebookLoginButton />
        <div className="flex justify-center my-2">
          <Text type="secondary">or</Text>
        </div>

        <div className="text-center mt-4">
          <Text>Don't have an account? <a href="/register">Register here</a></Text>
        </div>
      </Card>
    </div>
  );
};

export default LoginForm;
