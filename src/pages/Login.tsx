import FacebookLoginButton from "../components/FacebookLoginButton";
import LoginForm from "../components/Login";
import RegisterForm from "../components/Register";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg p-6 rounded-md w-96">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <FacebookLoginButton />
        <LoginForm />
        <h3 className="text-md font-semibold mt-4">Register</h3>
        <RegisterForm />
      </div>
    </div>
  );
};

export default LoginPage;
