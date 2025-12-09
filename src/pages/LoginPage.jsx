import React from 'react'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
const LoginPage = () => {
  return (
    <Box sx={{ marginTop: '120px', padding: '80px 53px', borderTop: '0.5px solid #000000', width: '100%' }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ maxHeight: '781px' }}>
          <img src="/Loginpage.png" alt="" style={{ maxwidth: '683px' }} />
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', pl: '150px' }}>
          {/* login form */}
          <Box component='form' sx={{ display: 'flex', flexDirection: 'column', gap: '34px', width: '371px' }}>
            <Box>
              <Typography sx={{ fontSize: '36px', fontWeight: '500', fontFamily: 'Inter', mb: '5px' }}>Log in to Exclusive</Typography>
              <Typography sx={{ fontSize: '16px', fontWeight: '100', fontFamily: 'Poppins' }}>Enter your details below</Typography>
            </Box>
            <TextField variant='standard' placeholder='Email or Phone Number' fullWidth />
            <TextField variant='standard' placeholder='Password' fullWidth />
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Button variant='contained' sx={{ p: '16px 48px', bgcolor: '#DB4444', color: 'white', fontSize: '14px' }}>Log In</Button>
              <Button variant='text' sx={{ color: '#DB4444', fontSize: '14px' }}>Forget Password?</Button>
            </Box>
          </Box>
        </Grid>

      </Grid>
    </Box>
  )
}

export default LoginPage
