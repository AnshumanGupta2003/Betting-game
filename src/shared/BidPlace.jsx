import { Box, Button, Modal, Typography } from '@mui/material'
import BidSlider from '../components/BidSlider'

const BidPlace = ({ bidData, handleBidBoxClose }) => {

    
    
   
    
     

  return (
    <Modal
        open={bidData.open} // Control visibility with 'open' state
        onClose={handleBidBoxClose} // Close when clicking outside
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            bgcolor: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: 24,
            width: "300px",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: "20px" }}>
            Place bid on  {bidData.vari}
            <br />
            {bidData.multi}x multiplyer
            <br /> 
            <BidSlider balance={1230} />
            

          </Typography>

          {/* Close button inside the popup */}
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleBidBoxClose}
          >
            Close
          </Button>
        </Box>
      </Modal>
  )
}

export default BidPlace