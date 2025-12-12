import React, { useState } from 'react'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { Password } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const LoginPage = () => {
  const [logindata, setLogindata] = useState({ emailphone: '', password: '' })
  const handlechange = (e) => {
    setLogindata({ ...logindata, [e.target.name]: e.target.value })
  }
  console.log(logindata)
      const navigate = useNavigate()
  const handleLogin = async () => {
    try {
      
      const response = await axios.post("https://fakestoreapi.com/auth/login", {
        "username": logindata.emailphone,
        "password": logindata.password
      })
      console.log(response)
      if(response.status===201)
        {
          navigate('/dashboard')
        }
      } catch (error) {
        alert("please enter correct username and password")
      }

  }


  return (
    <Box sx={{ marginTop: '90px', padding: '80px 53px', borderTop: '0.5px solid #000000', width: '100%' }}>
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

            {/* email or phone number field */}
            <TextField variant='standard' placeholder='Email or Phone Number' fullWidth
              name='emailphone'
              value={logindata.emailphone}
              onChange={handlechange} />

            {/* password field */}
            <TextField variant='standard' placeholder='Password' fullWidth
              name='password'
              value={logindata.password}
              onChange={handlechange} />

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              {/* Submit */}
              <Button onClick={handleLogin} variant='contained' sx={{ p: '16px 48px', bgcolor: '#DB4444', color: 'white', fontSize: '14px' }}>Log In</Button>
              <Button variant='text' sx={{ color: '#DB4444', fontSize: '14px' }}>Forget Password?</Button>
            </Box>
          </Box>
        </Grid>

      </Grid>
    </Box>
  )
}

export default LoginPage
