import React from 'react';
import { Box, Typography,Link } from '@mui/material';
import SmpLogo from './assets/marketplace-64.png'; 
import yectraLogo from './assets/image.png' 

const App = () => {
  return (
   
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '90vh',
        textAlign: 'center',
      }}
    >
      <Box sx={{m:4}} >
        <a href="https://orange-pebble-0ad7e9f1e.5.azurestaticapps.net/" target="_blank" rel="noopener noreferrer">
          <img src={SmpLogo} className="logo" alt="SMP logo" />
        </a>
        <Typography variant="h3">Software Marketplace</Typography>
      </Box>
      <Box>
        Edit <code>src/App.jsx</code> and save to test 
        <Typography variant="subtitle2">
        Click on the SMP logo to visit the marketplace
      </Typography>
      </Box>
      <Box 
        component="footer"
        sx={{ 
          mt: 'auto', 
          py: 2, 
          width: '100%', 
          textAlign: 'center'
        }}
      >
        <Typography variant="body2">
        Yectra technologies
        </Typography>
       
        <Typography variant="body2">
         Coimbatore,Tamil Nadu
        </Typography>
        <Typography variant="body2">
          Follow us on:
          {' '}
          <Link href="https://www.instagram.com/yectra_technologies/" target="_blank" rel="noopener noreferrer">Instagram</Link>
          {' | '}
          <Link href="https://in.linkedin.com/company/yectra" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
        </Typography>
      </Box>
      
    </Box>
  );
}

export default App;
