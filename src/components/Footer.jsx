import React from 'react'
import {Box, Typography} from "@mui/material";

const Footer = () => {
  return (
      <Box sx={{ mt: 'auto', p: '0.2rem', bgcolor: '#efefef', zIndex:1201 }}>
        <Typography sx={{ textAlign: 'center', verticalAlign: 'middle' }}>
          Contact me at <a style={{textDecoration: 'none'}} target="_blank" href="https://www.linkedin.com/in/urvashiroy/">Urvashi Roy</a>
        </Typography>
      </Box>
  )
}

export default Footer