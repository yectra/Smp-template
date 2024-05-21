import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import SmpLogo from './assets/marketplace-64.png'; 
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CompanyLogo from './assets/Graphic1.png'; // Add the path to your company logo

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
      <Box sx={{ mt: 6, mb: 4, textAlign: 'center' }}>
        <a href="https://orange-pebble-0ad7e9f1e.5.azurestaticapps.net/" target="_blank" rel="noopener noreferrer">
          <img src={SmpLogo} className="logo" alt="SMP logo" />
        </a>
        <Typography variant="h3">
    
            Software Marketplace
        </Typography>
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
      
        <img src={CompanyLogo} alt="Company logo" style={{ height: '20px', verticalAlign: 'middle' }} />
        <Typography variant="body2">
          Yectra Technologies
        </Typography>
        <Typography variant="body2" sx={{m:0.5}}>
          Coimbatore, Tamil Nadu
        </Typography>
        <Typography variant="body2" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {' '}
          <Link href="https://www.instagram.com/yectra_technologies/" target="_blank" rel="noopener noreferrer" sx={{ mx: 1 }}>
            <InstagramIcon />
          </Link>
          {' '}
          <Link href="https://in.linkedin.com/company/yectra" target="_blank" rel="noopener noreferrer" sx={{ mx: 1 }}>
            <LinkedInIcon />
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
