import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AuthCallback from "./pages/AuthCallback";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/facebook/callback" element={<AuthCallback />} />
      </Routes>
    </Router>
  );
}

export default App;
