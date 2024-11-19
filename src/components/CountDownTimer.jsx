import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material'

const CountDownTimer = ({ durationMinutes }) => {
  // Convert the duration to milliseconds
  const durationMs = durationMinutes * 60 * 1000;

  // Set a fixed start time for all users. This could be the beginning of the current day or a fixed timestamp.
  const fixedStartTime = new Date('2024-11-07T00:00:00Z').getTime(); // Fixed start time for everyone
  const endTime = fixedStartTime + durationMs; // Calculate the end time based on start time and duration

  // Calculate the time left
  const calculateTimeLeft = () => {
    const currentTime = new Date().getTime();
    return Math.max(0, Math.floor((endTime - currentTime) / 1000)); // Ensure non-negative seconds
  };

  const [secondsLeft, setSecondsLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    // Update the countdown every second
    const timerId = setInterval(() => {
      setSecondsLeft(calculateTimeLeft()); // Recalculate the remaining time
    }, 1000);

    // Stop the timer when the countdown hits zero
    if (secondsLeft === 0) {
      clearInterval(timerId);
    }

    // Cleanup interval on component unmount
    return () => clearInterval(timerId);
  }, [secondsLeft]); // Only update when `secondsLeft` changes

  // Format minutes and seconds for display
  const minutesDisplay = Math.floor(secondsLeft / 60);
  const secondsDisplay = secondsLeft % 60;

  return (
    <Box sx={{display:"flex", justifyContent:"center"}}>
      {minutesDisplay}:{secondsDisplay < 10 ? `0${secondsDisplay}` : secondsDisplay}
    </Box>
  );
};

export default CountDownTimer;
