function CounterPanel({ userCount, setUserCount }) {
  return (
    <div className="counter-panel">
      <h3>Your Feedback Count: {userCount}</h3>
      <button onClick={() => setUserCount(userCount + 1)}>+1</button>
      <button onClick={() => setUserCount(userCount - 1)}>-1</button>
      <button onClick={() => setUserCount(0)}>Reset</button>
      <button onClick={() => setUserCount(userCount + 5)}>+5</button>
    </div>
  );
}

export default CounterPanel;
