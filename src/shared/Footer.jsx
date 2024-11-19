import { AppBar, Box, Toolbar } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { darkRed } from "../components/colors";
import {
  History as HistoryIcon,
  SportsEsports,
  BarChart,
} from "@mui/icons-material";

const Footer = () => {
  const navigate = useNavigate();
  const openHistory = () => navigate("/History");
  const openmyHistory = () => navigate("/myHistory");
  const openChart = () => navigate("/Chart");

  return (
    <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar
        sx={{
          bgcolor: darkRed,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
            color: "black",
            fontWeight: "700",
            fontFamily: "Ariel",
          }}
        >
          <Box
            onClick={openHistory}
            sx={{
              display: "flex",
              flexDirection: "column", // Align items in a single column
              alignItems: "center", // Center the icon and text horizontally
              cursor: "pointer", // Change cursor to pointer on hover
              gap: 0.5,
            }}
          >
            <HistoryIcon />
            Game History
          </Box>

          <Box
            onClick={openmyHistory}
            sx={{
              display: "flex",
              flexDirection: "column", // Align items in a single column
              alignItems: "center", // Center the icon and text horizontally
              cursor: "pointer", // Change cursor to pointer on hover
              gap: 0.5,
            }}
          >
            <SportsEsports />
            My History
          </Box>
          <Box
            onClick={openChart}
            sx={{
              display: "flex",
              flexDirection: "column", // Align items in a single column
              alignItems: "center", // Center the icon and text horizontally
              cursor: "pointer", // Change cursor to pointer on hover
              gap: 0.5,
            }}
          >
            <BarChart />
            Chart
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
