import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TrainerPage from "./pages/TrainerPage";
import FeedbackPage from "./pages/FeedbackPage";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Router>
        <nav className="navbar">
          <Link to="/" className="nav-link">
            Trainer
          </Link>
          <Link to="/feedback" className="nav-link">
            Feedback
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<TrainerPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
