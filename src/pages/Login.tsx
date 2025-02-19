import FacebookLoginButton from "../components/FacebookLoginButton";
import LoginForm from "../components/Login";
import RegisterForm from "../components/Register";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg p-6 rounded-md w-96">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
