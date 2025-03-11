import { useState } from "react";
import axios from "axios";
import { Form, Input, Button, Card, Typography } from "antd";
import { useNavigate } from "react-router-dom";
const { Title, Text } = Typography;
const API_URL = process.env.REACT_BACKEND_URL;

const RegisterForm = () => {
  const navigate = useNavigate();

  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
  });

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
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card style={{ width: "50%" }}>
        <Title level={3} className="text-center">
          Register
        </Title>
        <Form layout="vertical" onFinish={handleRegister}>
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[
              { required: true, message: "Please enter your full name!" },
            ]}
          >
            <Input placeholder="Enter your full name" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Invalid email!" },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please enter your password!" },
              { min: 6, message: "Password must be at least 6 characters!" },
            ]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match!"));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm your password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Register
            </Button>
          </Form.Item>
        </Form>

        <div className="text-center mt-4">
          <Text>
            Already have an account?{" "}
            <a onClick={() => navigate("/")}>Login here</a>
          </Text>
        </div>
      </Card>
    </div>
  );
};

export default RegisterForm;
