import React from 'react'
import { Box, Divider, Grid, IconButton, InputBase, Link, Paper, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <Box sx={{ width: '1440px', backgroundColor: '#000', height: '440px' }}>
      <Grid container sx={{ color: 'white', pt: '80px', pl: '135px' }}>
        {/* Exclusive */}
        <Grid size={2.5} sx={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#FAFAFA' }}>
          <Typography sx={{ fontSize: '24px', fontWeight: '700', fontFamily: 'Inter', mb: '5px' }}>Exclusive</Typography>
          <Typography sx={{ fontSize: '20px', fontWeight: '500', fontFamily: 'Poppins' }}>Subscribe</Typography>
          <Typography sx={{ fontSize: '16px', fontWeight: '400', fontFamily: 'Poppins' }}>Get 10% off your first order</Typography>
          <Paper elevation={0} sx={{ width: '217px', height: '48px', backgroundColor: 'transparent', border: '1.5px solid #FAFAFA', display: 'flex', alignItems: 'center', pl: '16px' }}>
            <InputBase placeholder='Enter your email' sx={{ color: '#FAFAFA', opacity: '40%', fontSize: '16px', fontFamily: 'Poppins' }} />
            <IconButton>
              <SendIcon sx={{ color: '#FAFAFA' }} />
            </IconButton>
          </Paper>
        </Grid>
        {/* Support */}
        <Grid size={2.5} sx={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#FAFAFA' }}>
          <Typography sx={{ fontSize: '20px', fontWeight: '500', fontFamily: 'Inter', mb: '5px' }}>Support</Typography>
          <Typography sx={{ fontSize: '16px', fontWeight: '400', fontFamily: 'Poppins' }}>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</Typography>
          <Typography sx={{ fontSize: '16px', fontWeight: '400', fontFamily: 'Poppins' }}>exclusive@gmail.com</Typography>
          <Typography sx={{ fontSize: '16px', fontWeight: '400', fontFamily: 'Poppins' }}>+88015-88888-9999</Typography>
        </Grid>
        {/* Account */}
        <Grid size={1.5} sx={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#FAFAFA' }}>
          <Typography sx={{ fontSize: '20px', fontWeight: '500', fontFamily: 'Inter', mb: '5px' }}>Account</Typography>
          <Link sx={{ fontSize: '16px', fontWeight: '400', fontFamily: 'Poppins', color: '#fafafa', textDecoration: 'none' }}>My Account</Link>
          <Link sx={{ fontSize: '16px', fontWeight: '400', fontFamily: 'Poppins', color: '#fafafa', textDecoration: 'none' }}>Login / Register</Link>
          <Link sx={{ fontSize: '16px', fontWeight: '400', fontFamily: 'Poppins', color: '#fafafa', textDecoration: 'none' }}>Cart</Link>
          <Link sx={{ fontSize: '16px', fontWeight: '400', fontFamily: 'Poppins', color: '#fafafa', textDecoration: 'none' }}>Wishlist</Link>
          <Link sx={{ fontSize: '16px', fontWeight: '400', fontFamily: 'Poppins', color: '#fafafa', textDecoration: 'none' }}>Shop</Link>
        </Grid>
        {/* Quick Link */}
        <Grid size={1.5} sx={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#FAFAFA' }}>
          <Typography sx={{ fontSize: '20px', fontWeight: '500', fontFamily: 'Inter', mb: '5px' }}>Quick Link</Typography>
          <Link sx={{ fontSize: '16px', fontWeight: '400', fontFamily: 'Poppins', color: '#fafafa', textDecoration: 'none' }}>Privacy Policy</Link>
          <Link sx={{ fontSize: '16px', fontWeight: '400', fontFamily: 'Poppins', color: '#fafafa', textDecoration: 'none' }}>Terms Of Use</Link>
          <Link sx={{ fontSize: '16px', fontWeight: '400', fontFamily: 'Poppins', color: '#fafafa', textDecoration: 'none' }}>FAQ</Link>
          <Link sx={{ fontSize: '16px', fontWeight: '400', fontFamily: 'Poppins', color: '#fafafa', textDecoration: 'none' }}>Contact</Link>
        </Grid>
        {/* Download app */}
        <Grid size={2} sx={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#FAFAFA' }}>
          <Typography sx={{ fontSize: '20px', fontWeight: '500', fontFamily: 'Inter', mb: '5px' }}>Download App</Typography>
          <Typography sx={{ fontSize: '12px', fontWeight: '500', fontFamily: 'Poppins', mb: '5px' }}>Save $3 with App New User Only</Typography>
          <img src="/QRcode.png" alt="QRcode" style={{ width: '198px', height: '84px' }} />
        </Grid>
      </Grid>
      <Divider sx={{ borderColor: '#FFFFFF', opacity: '40%', width: '100%', mt: '90px' }} />
      <Typography sx={{ fontSize: '16px', opacity: '40%', color: '#D9D9D9', pt: '18px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center',gap:1 }}>
        <CopyrightIcon sx={{ color: '#D9D9D9',fontSize:'23px' }} />
        Copyright Rimel 2022. All right reserved</Typography>
    </Box>
  )
}

export default Footer
