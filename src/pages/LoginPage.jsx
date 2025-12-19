import React, { useEffect, useState } from 'react'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { Password } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { loggedIn, loggedOut, registered } from '../redux/authSlice'
const LoginPage = () => {
  const [logindata, setLogindata] = useState({ emailphone: '', password: '' })
  const handlechange = (e) => {
    setLogindata({ ...logindata, [e.target.name]: e.target.value })
  }
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const handleLogin = async () => {
  //   try {
  //     const response = await axios.post("https://fakestoreapi.com/auth/login", {
  //       "username": logindata.emailphone,
  //       "password": logindata.password
  //     })
  //     console.log(response)
  //     if (response.status === 201) {
  //       navigate('/dashboard')
  //       dispatch(loggedIn())

  //     }
  //   } catch (error) {
  //     alert("please enter correct username and password")
  //   }

  // }
  const handleLogin = () => {
    const signupdata = JSON.parse(localStorage.getItem('signupdata'))
    if (signupdata && signupdata.emailphone == logindata.emailphone && signupdata.password == logindata.password) {
      navigate('/dashboard')
      dispatch(loggedIn())
      dispatch(registered())
      localStorage.setItem('login','true')
    }
    else {
      alert('please enter the registered email or phone number')
    }
  }

  useEffect(()=>{
    dispatch(loggedOut())
    dispatch(registered())
    localStorage.removeItem('login')
  })


  return (
    <Box sx={{ padding: '80px 53px', borderTop: '0.5px solid #000000', width: '100%' }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ maxHeight: '781px',display: { xs: 'none', md: 'flex' },justifyContent: 'center',alignItems: 'center' }}>
          <img src="/Loginpage.png" alt="" style={{ maxwidth: '100%' }} />
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent:{ xs: 'center', md: 'flex-start' },alignItems: 'center', pl: { xs: 0, md: '150px' } }}>
          {/* login form */}
          <Box component='form' sx={{ display: 'flex', flexDirection: 'column', gap: '34px', width:  { xs: '100%', sm: '80%', md: '371px' } }}>
            <Box>
              <Typography sx={{ fontSize: { xs: '28px', md: '36px' }, fontWeight: '500', fontFamily: 'Inter', mb: '5px' }}>Log in to Exclusive</Typography>
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

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              {/* Login button */}
              <Button onClick={handleLogin} variant='contained' sx={{ p: '16px 48px', bgcolor: '#DB4444', color: 'white', fontSize: '14px' }}>Log In</Button>
              <Typography sx={{fontSize:'14px'}}>Don't have an account?<span style={{fontWeight:'600'}}><Link to={'/register'}>Register</Link></span></Typography>
            </Box>
          </Box>
        </Grid>

      </Grid>
    </Box>
  )
}

export default LoginPage
