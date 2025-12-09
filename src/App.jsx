import { Box } from '@mui/material'
import './App.css'
import Header from './components/Header'
import LoginPage from './pages/LoginPage'
import Footer from './components/Footer'

function App() {

  return (
    <Box>
      <Header />
      <LoginPage />
      <Footer />
    </Box>
  )
}

export default App
