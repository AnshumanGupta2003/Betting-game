import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { darkRed } from '../components/colors'

const Signin = () => {
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

export default Signin;

