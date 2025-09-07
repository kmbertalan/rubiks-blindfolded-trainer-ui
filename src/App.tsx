import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import TrainerPage from "./pages/TrainerPage";
import FeedbackPage from "./pages/FeedbackPage";
import "./App.css";
import HowToPage from "./pages/HowToPage";

function App() {
  const { t } = useTranslation();

  return (
    <div className="app-container">
      <Router>
        <nav className="navbar">
          <Link to="/" className="nav-link">
            {t('navigation.trainer')}
          </Link>
          <Link to="/howTo" className="nav-link">
            {t('navigation.howToUse')}
          </Link>
          <Link to="/feedback" className="nav-link">
            {t('navigation.feedback')}
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<TrainerPage />} />
          <Route path="/howTo" element={<HowToPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
