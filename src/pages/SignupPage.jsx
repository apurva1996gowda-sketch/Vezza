import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registered } from '../redux/authSlice'
import { useNavigate } from 'react-router-dom'

const SignupPage = () => {
  const [submitted, setSubmitted] = useState(false)
  const [signupdata, setSignupdata] = useState({ name: '', emailphone: '', password: '', confirmpassword: '' })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handlechange = (e) => {
    setSignupdata({
      ...signupdata,
      [e.target.name]: e.target.value
    })
  }
  const handlesubmit = (e) => {
    setSubmitted(true)

    const validform =
      signupdata.name.trim() !== '' &&
      signupdata.emailphone.trim() !== '' &&
      signupdata.password.length > 6 &&
      signupdata.confirmpassword === signupdata.password

    if (validform) {
      console.log(signupdata)
      localStorage.setItem('signupdata', JSON.stringify(signupdata))
      alert('registered successfully please login to your account')
      dispatch(registered())
      navigate('/')
    }
  }

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, mb: '100px' }}>
      <Typography variant='h3' sx={{ fontFamily: 'cursive', fontWeight: '600' }}>vezza</Typography>
      <Paper sx={{ width: '30%', padding: 5, border: '0.5px solid grey' }}>
        <Box component='form' sx={{ display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'center' }}>
          <Typography variant='h4' >Create Account</Typography>
          {/* name field */}
          <TextField placeholder='Name' variant='standard' fullWidth
            value={signupdata.name}
            name='name'
            onChange={handlechange}
            error={submitted && signupdata.name == '' ? true : false}
            helperText={submitted && signupdata.name == '' ? 'enter your name' : ''} />

          {/* email or phone number field */}
          <TextField placeholder='Email or Phone number' variant='standard' fullWidth
            value={signupdata.emailphone}
            name='emailphone'
            onChange={handlechange}
            error={submitted && signupdata.emailphone == '' ? true : false}
            helperText={submitted && signupdata.emailphone == '' ? 'enter your email or phone number' : ''} />

          {/* password field */}
          <TextField placeholder='Password' variant='standard' fullWidth
            value={signupdata.password}
            name='password'
            onChange={handlechange}
            error={submitted && (signupdata.password.length <= 6) ? true : false}
            helperText='password must be at least 6 characters' />

          {/* confirm password field */}
          <TextField placeholder='Re-enter Password' variant='standard' fullWidth
            value={signupdata.confirmpassword}
            name='confirmpassword'
            onChange={handlechange}
            helperText={submitted && (signupdata.password !== signupdata.confirmpassword) ? 'password doesnt match' : ''} />

          <Button onClick={handlesubmit} variant='contained' sx={{ bgcolor: 'orange', borderRadius: '10px', width: '250px' }}>Sign Up</Button>
        </Box>
      </Paper>
    </Box>
  )
}

export default SignupPage
