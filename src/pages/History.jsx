import React from "react";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { GameHistory } from '../constants/testData'
const History = () => {
  const GameData = GameHistory
  return (
    <div>
      <Header />

      <Box>
        <Container sx={{
          marginBottom:"100px"
        }}>
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
                  </TableCell>
                </TableRow>
              </TableHead>

              {/* Table Body */}
              <TableBody sx={{ color: "white", textAlign: "center" }}>
                {GameData.slice(0,50).map((game, index) => (
                <TableRow>
                  <TableCell sx={{ color: "white", textAlign: "center" }}>
                    {game.gameId}
                  </TableCell>
                  <TableCell sx={{ color: "white", textAlign: "center" }}>
                    {game.winNum}
                  </TableCell>
                  <TableCell sx={{ color: "white", textAlign: "center" }}>
                    {game.winColor}
                  </TableCell>
                  <TableCell sx={{ color: "white", textAlign: "center" }}>
                    {game.WinSize}
                  </TableCell>
                </TableRow>
                ))}
              </TableBody>
            </Table>
        </Container>
      </Box>

      <Footer />
    </div>
  );
};

export default History;
