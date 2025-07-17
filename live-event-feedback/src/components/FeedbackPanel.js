import { useEffect } from "react";

function FeedbackPanel({ feedbackCounts, setFeedbackCounts, incrementUserCount }) {
  const types = ["Excellent", "Good", "Average", "Poor"];

  const handleVote = (type) => {
    setFeedbackCounts((prev) => ({ ...prev, [type]: prev[type] + 1 }));
    incrementUserCount();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const randomType = types[Math.floor(Math.random() * types.length)];
      setFeedbackCounts((prev) => ({ ...prev, [randomType]: prev[randomType] + 1 }));
    }, 2000);
    return () => clearInterval(interval);
  }, [setFeedbackCounts]);

  return (
    <div>
      <h3>Feedback Panel</h3>
      {types.map((type) => (
        <button
          key={type}
          className={`feedback-btn ${type.toLowerCase()}`}
          onClick={() => handleVote(type)}
        >
          {type} → {feedbackCounts[type]}
        </button>
      ))}
    </div>
  );
}

export default FeedbackPanel;
