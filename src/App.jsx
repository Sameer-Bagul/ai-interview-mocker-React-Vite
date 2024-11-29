import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Interview from "./pages/Interview";
import StartInterview from "./pages/StartInterview";
import Feedback from "./pages/Feedback";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/interview/:interviewId" element={<Interview />} />
        <Route path="/dashboard/interview/:interviewId/start" element={<StartInterview />} />
        <Route path="/dashboard/interview/:interviewId/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
};

export default App;
