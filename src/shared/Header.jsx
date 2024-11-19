import React from 'react'
import { Box, AppBar, Toolbar, Typography, Tooltip } from '@mui/material'
import { AccountCircle as ProfileIcon, ArrowBack as BackIcon} from '@mui/icons-material'
import { useLocation, useNavigate } from 'react-router-dom';
import { darkRed  } from '../components/colors';

const Header = () => {
  const navigate = useNavigate();  
  const ToMenu = () => navigate("/Account");
  const ToGame = () => navigate("/");
  const location = useLocation();

  return (
    <Box  sx={{ 
      flexGrow: 1,
      
     }} >
      <AppBar
      
          position="static"
      >
        
          <Toolbar sx={{
            bgcolor: darkRed,
          }} >
            <Box sx={{
                color : "black",
                }}>
              {location.pathname === "/"?(
                <Tooltip title="My Info">
                <ProfileIcon onClick={ToMenu} label={"Account"} />
                  </Tooltip>
                  )
              :(
              
                <BackIcon onClick={ToGame}/>

              )}
            </Box>
            <Box sx={{
              display:"flex",
              flexGrow:1,
              justifyContent:"center"
            }}>
              <Typography
              sx={{
                color : "black",
                fontWeight: "bold",
                fontSize : "20px",
                fontFamily : "Ariel",
              }}
              >


                COLOR PREDICTION

              </Typography>

            </Box>
            <Box  sx={{ ml: 'auto', color:"black" ,fontWeight: "bold",}}>
                #GAME LOGO
            </Box>

          </Toolbar>

      </AppBar>
    </Box>
  )
}

export default Header
