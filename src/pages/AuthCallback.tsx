import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const AuthCallback = () => {
  const navigate = useNavigate();

  console.log("process.env.REACT_APP_BACKEND_URL",process.env.REACT_APP_BACKEND_URL)
  useEffect(() => {
    const fetchAccessToken = async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");

      if (!code) return navigate("/");

      try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/facebook`, { code });
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("fbToken", response.data.fbToken);

        navigate("/");
      } catch {
        navigate("/");
      }
    };

    fetchAccessToken();
  }, [navigate]);

  return <h2>Processing login...</h2>;
};

export default AuthCallback;
