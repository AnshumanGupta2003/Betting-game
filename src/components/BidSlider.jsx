import React, { useState } from "react";
import { Box, Typography, Slider, Button } from "@mui/material";

const BidSlider = ({ balance }) => {
  const [bidAmount, setBidAmount] = useState(0);

  const handleSliderChange = (event, newValue) => {
    setBidAmount(newValue);  // Update bid amount as slider is moved
  };

  const handleBidSubmit = () => {
    // Submit or use the bid amount
    console.log("Bid Amount Submitted:", bidAmount);
  };

  return (
    <Box sx={{ width: 300, margin: "auto", textAlign: "center", padding: "20px" }}>
      <Typography variant="h6" gutterBottom>
        Set Your Bid Amount
      </Typography>
      
      {/* Slider Component */}
      <Slider
        value={bidAmount}
        onChange={handleSliderChange}
        min={0}
        max={balance}   // Set maximum to the balance amount
        step={100}
        valueLabelDisplay="auto"  // Shows tooltip with current value on hover
      />

      {/* Display current bid amount */}
      <Typography variant="body1" sx={{ marginTop: "10px" }}>
        Selected Bid Amount: ${bidAmount}
      </Typography>

      {/* Button to confirm bid */}
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleBidSubmit} 
        sx={{ mt: 2 }}
      >
        Submit Bid
      </Button>
    </Box>
  );
};

export default BidSlider;
