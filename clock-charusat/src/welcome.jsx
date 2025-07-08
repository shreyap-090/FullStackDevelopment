import React, { useState, useEffect } from 'react';

const Welcome = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={styles.container}>
      <h1>Welcome to Charusat!</h1>
      <p>Current Date and Time:</p>
      <h2>{currentTime.toLocaleString()}</h2>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    marginTop: '100px',
  }
};

export default Welcome;