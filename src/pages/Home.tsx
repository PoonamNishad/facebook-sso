import  { useEffect, useState } from "react";
import axios from "axios";
import FacebookLogin from "../components/FacebookLoginButton";
import Profile from "./Profile";
import LoginPage from "./Login";

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get(`${process.env.REACT_BACKEND_URL}/user/profile`, { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => setUser(res.data.user))
        .catch(() => setUser(null));
    }
  }, []);

  return <div>{user ? <Profile user={user} /> : <LoginPage />}</div>;
};

export default Home;
