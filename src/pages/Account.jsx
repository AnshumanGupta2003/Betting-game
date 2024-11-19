import React from "react";
import Header from "../shared/Header";
import { Box, Container, Typography, Stack } from "@mui/material";
import { darkGrey, darkRed } from "../components/colors";
import { useNavigate } from "react-router-dom";
import Footer from "../shared/Footer";

const Account = () => {
  const user = {
    id: "19564165",
    name: "ABCD GHIJ",
    mail: "abcd@xyz.com",
    phone: "+0 1234567890",
    balance: "1200",
  };

  const navigate = useNavigate();

  const ToWithdraw = () => navigate("/withdraw");
  const ToDeposit = () => navigate("/deposit");

  return (
    <Box>
      <Header />

      {/* Main */}
      <Box
        sx={{
          bgcolor: darkGrey,
          minHeight: "100vh",
          position: "relative",
          padding: "10px",
        }}
      >
        {/* Account Details Box */}

        <Container
          sx={{
            bgcolor: "white",
            width: "-webkit-fill-available",
            padding: "50px 50px",
            border: "solid 0px",
            borderRadius: "10px",
            minHeight: "500px",
          }}
        >
          <Stack
            spacing={1.25}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography>Name</Typography>
              <Typography>:</Typography>
              <Typography>{user.name}</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography>Phone no.</Typography>
              <Typography>:</Typography>
              <Typography>{user.phone}</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography>Account Balance</Typography>
              <Typography>:</Typography>
              <Typography>${user.balance}</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography>Mail Id</Typography>
              <Typography>:</Typography>
              <Typography>{user.mail}</Typography>
            </Box>

            {/* Change Password Box  */}
            {/* <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                
                color: "black",
              }}
            >
              <Typography 
              sx={{
                bgcolor:darkRed,
                height:"40px",
                width:"160px",
                borderRadius:"10px",
                marginTop:"20px",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",

              }}

              > Change Password</Typography>
            </Box> */}

            {/* End Change Password Box  */}

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignContent: "center",

                color: "black",
              }}
            >
              <Typography
                sx={{
                  bgcolor: darkRed,
                  height: "40px",
                  width: "120px",
                  borderRadius: "10px",
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={ToDeposit}
              >
                Deposit
              </Typography>

              <Typography
                sx={{
                  bgcolor: darkRed,
                  height: "40px",
                  width: "120px",
                  borderRadius: "10px",
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={ToWithdraw}
              >
                Withdraw
              </Typography>
            </Box>
          </Stack>
        </Container>

        {/* End Account Details Box */}
      </Box>
      {/* End Main */}

      <Footer />
    </Box>
  );
};

export default Account;
