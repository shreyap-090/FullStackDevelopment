import { useState } from "react";
import "./styles/App.css";
import Greeting from "./components/Greeting";
import LiveClock from "./components/LiveClock";
import FeedbackPanel from "./components/FeedbackPanel";
import CounterPanel from "./components/CounterPanel";

function App() {
  const [feedbackCounts, setFeedbackCounts] = useState({
    Excellent: 0,
    Good: 0,
    Average: 0,
    Poor: 0
  });

  const [userCount, setUserCount] = useState(0);
  const [userName, setUserName] = useState({});

  const incrementUserCount = () => setUserCount((prev) => prev + 1);

  const handleNameSubmit = (firstName, surname) => {
    setUserName({ firstName, surname });
  };

  return (
    <div className="container">
      <h1>🎤 Live Event Feedback Dashboard</h1>
      <Greeting onNameSubmit={handleNameSubmit} />
      <LiveClock />
      <FeedbackPanel
        feedbackCounts={feedbackCounts}
        setFeedbackCounts={setFeedbackCounts}
        incrementUserCount={incrementUserCount}
      />
      <CounterPanel userCount={userCount} setUserCount={setUserCount} />
    </div>
  );
}

export default App;
