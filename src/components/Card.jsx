import React from 'react'
import { Typography } from '@mui/material'
import { Pink, Green, Blue } from '../components/colors'

const Card = (numb) => {
switch (numb){
  case 0: return(<Typography 
    sx={{
      margin:"5px",
      bgcolor:Pink,
      color:"white",
      borderRadius:"50%",
      width: 25,                // Set width (in pixels, for example)
      height:25,
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
    }}
    >0</Typography>)
  case 1:
  return (
    <Typography 
                      sx={{
                        margin:"5px",
                        bgcolor:Green,
                        color:"white",
                        borderRadius:"50%",
                        width: 25,                // Set width (in pixels, for example)
                        height:25,
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center"
                      }}
                      >1</Typography>
  )
  case 2: return(<Typography 
    sx={{
      margin:"5px",
      bgcolor:Blue,
      color:"white",
      borderRadius:"50%",
      width: 25,                // Set width (in pixels, for example)
      height:25,
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
    }}
    >2</Typography>)
  case 3: return(<Typography 
    sx={{
      margin:"5px",
      bgcolor:Pink,
      color:"white",
      borderRadius:"50%",
      width: 25,                // Set width (in pixels, for example)
      height:25,
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
    }}
    >3</Typography>)
  case 4: return(<Typography 
    sx={{
      margin:"5px",
      bgcolor:Blue,
      color:"white",
      borderRadius:"50%",
      width: 25,                // Set width (in pixels, for example)
      height:25,
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
    }}
    >4</Typography>)
  case 5: return(<Typography 
    sx={{
      margin:"5px",
      bgcolor:Pink,
      color:"white",
      borderRadius:"50%",
      width: 25,                // Set width (in pixels, for example)
      height:25,
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
    }}
    >5</Typography>)
  case 6: return(<Typography 
    sx={{
      margin:"5px",
      bgcolor:Green,
      color:"white",
      borderRadius:"50%",
      width: 25,                // Set width (in pixels, for example)
      height:25,
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
    }}
    >6</Typography>)
  case 7: return(<Typography 
    sx={{
      margin:"5px",
      bgcolor:Blue,
      color:"white",
      borderRadius:"50%",
      width: 25,                // Set width (in pixels, for example)
      height:25,
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
    }}
    >7</Typography>)
  case 8: return(<Typography 
    sx={{
      margin:"5px",
      bgcolor:Pink,
      color:"white",
      borderRadius:"50%",
      width: 25,                // Set width (in pixels, for example)
      height:25,
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
    }}
    >8</Typography>)
  case 9: return(<Typography 
    sx={{
      margin:"5px",
      bgcolor:Green,
      color:"white",
      borderRadius:"50%",
      width: 25,                // Set width (in pixels, for example)
      height:25,
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
    }}
    >9</Typography>)
  
  default: return(
    <div>ERROR</div>
  )
}

}

export default Card;