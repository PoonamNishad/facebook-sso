import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccessToken = async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");

      if (!code) return navigate("/");

      try {
        const response = await axios.post("http://localhost:5001/auth/facebook", { code });
        localStorage.setItem("token", response.data.token);
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
