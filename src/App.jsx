import { Box } from '@mui/material'
import './App.css'
import Header from './components/Header'
import LoginPage from './pages/LoginPage'
import Footer from './components/Footer'
import SignupPage from './pages/SignupPage'
import HomePage from './pages/HomePage'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import CartPage from './pages/CartPage'
import { useSelector } from 'react-redux'
import CheckoutPage from './pages/CheckoutPage'

function App() {
  const register=useSelector((state)=>state.auth.register)

  return (
    <Box>
      <BrowserRouter>
      {register && <Header />}
      {/* <Header/> */}
      <Routes>
        <Route path='/' element={<LoginPage/>}></Route>
        <Route path='/dashboard' element={<HomePage/>}></Route>
        <Route path='/register' element={<SignupPage/>}></Route>
        <Route path='/cart' element={<CartPage/>}></Route>
        <Route path='/checkout' element={<CheckoutPage/>}></Route>
      </Routes>
      {register && <Footer />}
      </BrowserRouter>
      
    </Box>
  )
}

export default App
