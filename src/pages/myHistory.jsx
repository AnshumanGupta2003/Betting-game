import React from 'react'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { myHistoryData } from '../constants/testData'
import Card from '../components/Card';

const myHistory = () => {


  return (
    <div>
      <Header/>
      
      <Box>
        <Container>
            <Table
              sx={{
                border: "solid white 2px",
                width: "100%", // Makes the table responsive
                marginTop:"20px"
              }}
            >
              {/* Table Head */}
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Game ID
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Bid Amount
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    My Bid
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Winner
                  </TableCell>
                  {/* <TableCell
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Number
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Color
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Big/Small
                  </TableCell> */}
                </TableRow>
              </TableHead>

              {/* Table Body */}
              <TableBody sx={{ color: "white", textAlign: "center" }}>
                { 
                  myHistoryData.slice(0,50).map((game, index) => (
                <TableRow>
                  <TableCell sx={{ color: "white", textAlign: "center" }}>
                    {game.gameId}
                  </TableCell>
                  <TableCell sx={{ color: "white", textAlign: "center" }}>
                    {game.myBidAmount}
                  </TableCell>
                  <TableCell sx={{ color: "white", textAlign: "center" }}>
                    {game.myBid}
                  </TableCell>
                  <TableCell sx={{ color: "white", textAlign: "center" }}>
                    {(() => {
                      switch(game.winNum){
                      case "1":return(Card(1));

                      case "2":return(Card(2));
                      case "3":return(Card(3));
                      default:return(Card(0));
                      }})()}
                  </TableCell>
                  {/* <TableCell sx={{ color: "white", textAlign: "center" }}>
                    {game.winNum}
                  </TableCell>
                  <TableCell sx={{ color: "white", textAlign: "center" }}>
                    {game.winColor}
                  </TableCell>
                  <TableCell sx={{ color: "white", textAlign: "center" }}>
                    {game.WinSize}
                  </TableCell> */}
                </TableRow>
                ))}
              </TableBody>
            </Table>
        </Container>
      </Box>

      <Footer/>
      </div>
  )
}

export default myHistory