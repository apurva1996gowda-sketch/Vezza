import React from 'react'
import { Box, Divider, Grid, IconButton, InputBase, Link, Paper, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (


    <Box sx={{ width: '100%', bgcolor: '#000', color: '#FAFAFA' }}>
      <Grid container spacing={5} sx={{ pt: 8, px: { xs: 2, sm: 4, md: 10 }}}>
        {/* Exclusive */}
        <Grid item xs={12} sm={6} md={2.5}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography sx={{ fontSize: '24px', fontWeight: 700, mb: 1 }}>Exclusive</Typography>
            <Typography sx={{ fontSize: '20px', fontWeight: 500 }}>Subscribe</Typography>
            <Typography sx={{ fontSize: '16px', fontWeight: 400 }}>Get 10% off your first order</Typography>
            <Paper
              elevation={0}
              sx={{
                width: '100%',
                maxWidth: '217px',
                height: '48px',
                bgcolor: 'transparent',
                border: '1.5px solid #FAFAFA',
                display: 'flex',
                alignItems: 'center',
                pl: 2
              }}
            >
              <InputBase
                placeholder="Enter your email"
                sx={{ color: '#FAFAFA', opacity: 0.6, fontSize: '16px', flex: 1 }}
              />
              <IconButton>
                <SendIcon sx={{ color: '#FAFAFA' }} />
              </IconButton>
            </Paper>
          </Box>
        </Grid>

        {/* Support */}
        <Grid item xs={12} sm={6} md={2.5}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <Typography sx={{ fontSize: '20px', fontWeight: 500, mb: 1 }}>Support</Typography>
            <Typography sx={{ fontSize: '16px' }}>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</Typography>
            <Typography sx={{ fontSize: '16px' }}>exclusive@gmail.com</Typography>
            <Typography sx={{ fontSize: '16px' }}>+88015-88888-9999</Typography>
          </Box>
        </Grid>

        {/* Account */}
        <Grid item xs={12} sm={6} md={1.5}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <Typography sx={{ fontSize: '20px', fontWeight: 500, mb: 1 }}>Account</Typography>
            {['My Account', 'Login / Register', 'Cart', 'Wishlist', 'Shop'].map((text) => (
              <Link
                key={text}
                sx={{ fontSize: '16px', fontWeight: 400, color: '#FAFAFA', textDecoration: 'none' }}
              >
                {text}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Quick Link */}
        <Grid item xs={12} sm={6} md={1.5}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <Typography sx={{ fontSize: '20px', fontWeight: 500, mb: 1 }}>Quick Link</Typography>
            {['Privacy Policy', 'Terms Of Use', 'FAQ', 'Contact'].map((text) => (
              <Link
                key={text}
                sx={{ fontSize: '16px', fontWeight: 400, color: '#FAFAFA', textDecoration: 'none' }}
              >
                {text}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Download App */}
        <Grid item xs={12} sm={6} md={2}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <Typography sx={{ fontSize: '20px', fontWeight: 500, mb: 1 }}>Download App</Typography>
            <Typography sx={{ fontSize: '12px', fontWeight: 500 }}>Save $3 with App New User Only</Typography>
            <Box component="img" src="/QRcode.png" alt="QRcode" sx={{ width: { xs: '150px', sm: '180px', md: '198px' }, height: 'auto' }} />
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ borderColor: '#FFFFFF', opacity: 0.4, mt: 8 }} />

      <Box sx={{ py: 2, textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
        <CopyrightIcon sx={{ fontSize: 23, color: '#D9D9D9' }} />
        <Typography sx={{ fontSize: '16px', opacity: 0.4, color: '#D9D9D9' }}>
          Copyright Rimel 2022. All right reserved
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer
