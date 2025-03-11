import { useEffect, useState } from "react";
import axios from "axios";
import Profile from "./Profile";
import LoginPage from "./Login";

const Home = () => {
  const [user, setUser] = useState(null);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fbToken = localStorage.getItem("fbToken");
    if (token) {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/user/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setUser(res.data.user))
        .catch(() => setUser(null));
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/user/pages`, {
          headers: { Authorization: `Bearer ${fbToken}` },
        })
        .then((res) => {
          if (res.data.data && res.data.data.length > 0) {
            setPages(res.data.data);
          }
        })
        .catch(() => setPages(null));
    }
  }, []);

  return (
    <div>{user ? <Profile user={user} pages={pages} /> : <LoginPage />}</div>
  );
};

export default Home;
