import { useEffect, useState } from "react";

function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <h3>
      🕒 <span>{time.toLocaleString()}</span>
    </h3>
  );
}

export default LiveClock;
