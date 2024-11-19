import React, { useState } from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import {
  Box,
  Container,
  Stack,
  Typography,
 
  
} from "@mui/material";
import { Blue, darkGrey, darkRed, Green, Pink } from "../components/colors";
import Card from "../components/Card";
import CountDownTimer from "../components/CountDownTimer";
import { useNavigate } from "react-router-dom";
import BidPlace from "../shared/BidPlace";



const Home = () => {
  const navigate = useNavigate();
  
  const ToWithdraw = () => navigate("/withdraw");
  const ToDeposit = () => navigate("/deposit");

  const [bidData, setBidData] = useState({
    open: false,
    vari: "",
    multi: "",
  });

  const handleBidBoxOpen = (variable, multiplier) => {
    setBidData({
      open: true,
      vari: variable,
      multi: multiplier,
    });
  };

  const handleBidBoxClose = () => {
    setBidData((prev) => ({ ...prev, open: false }));
  };
  

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
      }}
    >
      <Header />

      {/* Main Box */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: darkGrey,
          position: "absolute",
          top: "3rem", // Adjust this to the height of your Header
          bottom: "3rem", // Adjust this to the height of your Footer
          left: 0,
          right: 0,
        }}
      >
        {/* Balance Deposit WithDraw Container */}
        <Container
          sx={{
            height: "6rem",
            bgcolor: "white",
            margin: "10px",
            border: "solid 2px",
            borderRadius: "10px",
            width: "-webkit-fill-available",
            padding: "10px",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            Balance : 1230$
          </Typography>
          <hr />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              // marginBottom:"20px",
            }}
          >
            <Typography
              sx={{
                // '&:hover':{bgcolor:'darkGrey'},
                bgcolor: darkRed,
                width: "8rem",
                height: "2rem",
                border: "1px solid",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={ToDeposit}
            >
              Deposit
            </Typography>
            |
            <Typography
              sx={{
                // '&:hover':{bgcolor:'darkGrey'},
                bgcolor: darkRed,
                width: "8rem",
                height: "2rem",
                border: "1px solid",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={ToWithdraw}
            >
              Withdraw
            </Typography>
          </Box>
        </Container>
        {/*End Balance Deposit WithDraw Container */}

        {/* Select Duration Box */}
        <Container
          sx={{
            height: "6rem",
            margin: "10px",
            border: "solid 0px ",
            borderRadius: "10px",
            fontWeight: "bold",
            width: "-webkit-fill-available",
            padding: "10px",
            bgcolor: darkRed,
            color: "white",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
            }}
          >
            Select Duration
          </Typography>
          <hr />
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              fontWeight: "bold",
            }}
          >
            <Typography>1 min</Typography>|<Typography>3 min</Typography>|
            <Typography>5 min</Typography>|<Typography>10 min</Typography>
          </Stack>
        </Container>
        {/* End Select Duration Box */}

        {/* Previous Winner Box */}
        <Container
          sx={{
            height: "5rem",
            bgcolor: "white",
            margin: "10px",
            border: "solid 2px",
            borderRadius: "10px",
            width: "-webkit-fill-available",
            padding: "10px",

            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Box>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              Previous Winner
            </Typography>
            
              <Stack
                sx={{
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                {Card(0)}
                {Card(1)}
                {Card(2)}
                {Card(3)}
                {Card(4)}
              </Stack>
            
          </Box>

          <Box>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "6px",
              }}
            >
              Time Left:
            </Typography>
            <CountDownTimer durationMinutes={1} />

            {/* <h3>3-Minute Timer</h3>
      <CountDownTimer durationMinutes={3} />

      <h3>5-Minute Timer</h3>
      <CountDownTimer durationMinutes={5} />

      <h3>10-Minute Timer</h3>
      <CountDownTimer durationMinutes={10} /> */}
          </Box>
        </Container>
        {/* End Previous Winner Box */}

        {/* Display betting options Box*/}
        <Container
          sx={{
            // flexGrow:1,
            margin: "10px",
            marginBottom: "20px",
            border: "solid 0px ",
            borderRadius: "10px",
            fontWeight: "bold",
            width: "-webkit-fill-available",
            padding: "10px",
            bgcolor: darkRed,
            color: "white",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {/* Color Bidding Box */}

          <Box
            sx={{
              margin: "10px 0px",
            }}
          >
            <Stack
              sx={{
                flexDirection: "row",
                bgcolor: darkGrey,
                height: "2.5rem",
                width: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                border: "solid 0px",
                borderRadius: "8px",
              }}
            >
              <Typography
                sx={{
                  bgcolor: Pink,
                  width: "5rem",
                  border: "solid 0px",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Pink
              </Typography>
              <Typography
                sx={{
                  bgcolor: Green,
                  width: "5rem",
                  border: "solid 0px",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Green
              </Typography>
              <Typography
                sx={{
                  bgcolor: Blue,
                  width: "5rem",
                  border: "solid 0px",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Blue
              </Typography>
            </Stack>
          </Box>
          {/* End Color Bidding Box */}

          {/* Number Bidding Box */}

          <Box
            sx={{
              margin: "10px 0px",
              border: "solid 0px",
              borderRadius: "10px",
              bgcolor: darkGrey,

              height: "5rem",
              padding: "5px",
              display: "flex",
              alignItems: "normal",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Stack
              sx={{
                flexDirection: "row",

                width: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              {[...Array(5)].map((_, index) => (
                <Stack key={index}> {Card(index)}</Stack>
              ))}
            </Stack>
            <Stack
              sx={{
                flexDirection: "row",

                width: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              {[...Array(5)].map((_, index) => (
                <Stack key={index}> {Card(index + 5)}</Stack>
              ))}
            </Stack>
          </Box>
          {/* End Number Bidding Box */}

          {/* Bigger SMaller bidding box */}

          <Box
            sx={{
              margin: "10px 0px",
            }}
          >
            <Stack
              sx={{
                flexDirection: "row",
                bgcolor: darkGrey,
                height: "2.5rem",
                width: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                border: "solid 0px",
                borderRadius: "8px",
              }}
            >
              <Typography
                sx={{
                  bgcolor: "white",
                  color: "black",
                  fontWeight: "bold",
                  width: "5rem",
                  border: "solid 0px",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Big
              </Typography>
              <Typography
                sx={{
                  bgcolor: "white",
                  color: "black",
                  fontWeight: "bold",
                  width: "5rem",
                  border: "solid 0px",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "center",
                }}
                onClick={() => handleBidBoxOpen("small", "2")}
              >
                Small
              </Typography>
            </Stack>
          </Box>

          {/* End Bigger SMaller bidding box */}
        </Container>

        {/* End Display betting options Box*/}
      </Box>
      {/* End Main Box */}
      <Box>
        <Footer />
      </Box>
      

      <BidPlace bidData={bidData} handleBidBoxClose={handleBidBoxClose}/>
      
    </Box>
  );
};

export default Home;
