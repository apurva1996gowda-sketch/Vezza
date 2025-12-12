import { Box } from '@mui/material'
import './App.css'
import Header from './components/Header'
import LoginPage from './pages/LoginPage'
import Footer from './components/Footer'
import SignupPage from './pages/SignupPage'
import HomePage from './pages/HomePage'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

function App() {

  return (
    <Box>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<LoginPage/>}></Route>
        <Route path='/dashboard' element={<HomePage/>}></Route>
        <Route path='/register' element={<SignupPage/>}></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
      
    </Box>
  )
}

export default App
